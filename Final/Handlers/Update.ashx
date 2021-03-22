<%@ WebHandler Language="C#" Class="Update" %>

using System;
using System.Web;
using System.Collections.Generic;
using System.Web.Script.Serialization;
using System.IO;

public class Update : IHttpHandler {

    public static List<HttpContext> cons = new List<HttpContext>();

    public void ProcessRequest (HttpContext context) {

        string[] split = context.Request.RawUrl.Split('?');
        string path = split.Length == 2 ? $@"{context.Server.MapPath("/Codes")}\{split[1]}.txt" : $@"{context.Server.MapPath("/Codes")}\null.txt";
        int len = int.Parse(context.Request["0"]);

        if(len > 0)
        {
            List<string> lines = new List<string>();

            using (FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
            using (StreamReader sr = new StreamReader(fs))
            {
                string l;
                while ((l = sr.ReadLine()) != null) lines.Add(l);

                for (int i = 1; i <= len; i++)
                {
                    string[] edit = context.Request[i.ToString()].Split();
                    int line = int.Parse(edit[0]);
                    int s = int.Parse(edit[1]);
                    int e = int.Parse(edit[2]);
                    string act = edit.Length == 5 ? " " : edit[3];

                    Updater(lines, line, s, e, act);
                }
                sr.Close();
                fs.Close();
            }
            while (true)
            {
                try
                {
                    using (FileStream fs = new FileStream(path, FileMode.Open, FileAccess.Write, FileShare.ReadWrite))
                    using (StreamWriter sw = new StreamWriter(fs))
                    {
                        foreach (string line in lines) sw.WriteLine(line);
                        sw.Close();
                        fs.Close();
                    }
                    break;
                }
                finally { }
            }
        }
        context.Response.Write(context.Request["0"]);
    }

    public static void Updater(List<string> lines, int line, int s, int e, string act)
    {
        if (line >= lines.Count) return;

        switch (act)
        {
            case "Backspace":
                if(line != 0 &&  e == 0)
                {
                    lines[line - 1] += lines[line];
                    lines.RemoveAt(line);
                }
                else if(e != 0)
                {
                    if (e == s)
                    {
                        lines[line] = lines[line].Substring(0, s) + lines[line].Substring(s + 1);
                    }
                    //else 
                    //{
                    //    lines[line] = lines[line].Substring(0, s) + lines[line].Substring(e); 
                    //}
                }
                break;
            case "Delete":
                if(s == e && e < lines[line].Length) lines[line] = lines[line].Substring(0, s) + lines[line].Substring(e + 1);
                else lines[line] = lines[line].Substring(0, s) + lines[line].Substring(e);
                break;
            case "Tab":
                lines[line] = lines[line].Substring(0, s - 4) + "    " + lines[line].Substring(e - 4);
                break;
            case "Enter":
                if (s == e && s == 0) lines.Insert(line, "");
                else
                {
                    lines.Insert(line + 1, lines[line].Substring(e));
                    lines[line] = lines[line].Substring(0, s);
                }
                break;
            default:
                if (act.Length == 1)
                {
                    if (s == lines[line].Length || 0 == lines[line].Length) lines[line] += act;
                    else lines[line] = lines[line].Substring(0, s) + act + lines[line].Substring(e);
                }
                break;
        }
    }

    public bool IsReusable {
        get {
            return true;
        }
    }

}