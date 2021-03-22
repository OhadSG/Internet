<%@ WebHandler Language="C#" Class="Codes" %>

using System;
using System.Web;
using System.Web.SessionState;
using System.Web.Script.Serialization;
using System.Collections.Generic;

public class Codes : IHttpHandler, IRequiresSessionState {

    public void ProcessRequest(HttpContext context)
    {
        if (context.Session["UserId"] != null)
        {
            int id = Convert.ToInt32(context.Session["UserId"]);
            List<object> codes = DBFunctions.GetCodes(id);
            JavaScriptSerializer ser = new JavaScriptSerializer();
            string responseText = ser.Serialize(codes);
            context.Response.Write(responseText);
        }
        else
        {
            context.Response.Cookies["username"].Expires = DateTime.Now.AddDays(-1);
            context.Response.Write("");
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}