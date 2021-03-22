<%@ WebHandler Language="C#" Class="CreateCode" %>

using System;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using System.IO;

public class CreateCode : IHttpHandler, IRequiresSessionState {

    public void ProcessRequest (HttpContext context) {
        if(context.Session["UserId"] != null)
        {
            string title = context.Request["titleCreate"];
            string users = context.Session["UserId"].ToString();
            int id = DBFunctions.InsertCode(title, users);
            context.Response.Write(id);
            string path = $@"{context.Server.MapPath("/Codes")}\{id}.txt";

            using (FileStream fs = File.Create(path))
            using (StreamWriter sw = new StreamWriter(fs))
            {
                sw.WriteLine("");
                sw.Close();
                fs.Close();
            }
        }
        else
        {
            context.Response.Redirect("/Pages/Home.aspx");
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}