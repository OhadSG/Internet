<%@ WebHandler Language="C#" Class="Logout" %>

using System;
using System.Web;
using System.Web.SessionState;

public class Logout : IHttpHandler, IRequiresSessionState {

    public void ProcessRequest (HttpContext context) {
        context.Session.Abandon();
        context.Response.Cookies["username"].Expires = DateTime.Now.AddDays(-1);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}