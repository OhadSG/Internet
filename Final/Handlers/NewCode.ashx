<%@ WebHandler Language="C#" Class="NewCode" %>

using System;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using System.IO;
using System.Collections.Generic;

public class NewCode : IHttpHandler {

    public void ProcessRequest (HttpContext context) {

        string path = $@"{context.Server.MapPath("/Codes")}/{context.Request.RawUrl.Split('?')[1]}.txt";
        List<string> lines = new List<string>();

        using (var fs = new FileStream(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
        using (var sr = new StreamReader(fs)) {
            string line;
            while ((line = sr.ReadLine()) != null) lines.Add(line);
        }

        JavaScriptSerializer ser = new JavaScriptSerializer();
        string responseText = ser.Serialize(lines);
        context.Response.Write(responseText);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}