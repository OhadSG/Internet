<%@ WebHandler Language="C#" Class="Login" %>

using System;
using System.Web;
using System.Web.Script.Serialization;
using System.Collections.Generic;
using System.Web.SessionState;

public class Login : IHttpHandler, IRequiresSessionState {

    public void ProcessRequest (HttpContext context) {
        Dictionary<string, string> ret = new Dictionary<string, string>();

        string username = context.Request["usernameLogin"];
        string password = context.Request["passwordLogin"];

        string response = DBFunctions.Login(username, password);
        ret.Add("code", response);
        ret.Add("username", username);
        if (int.TryParse(response, out int x))
        {
            context.Session["UserId"] = response;
            HttpCookie name = new HttpCookie("username", username);
            name.Expires = DateTime.Now.AddMinutes(context.Session.Timeout);
            context.Response.Cookies.Add(name);
        }
        JavaScriptSerializer ser = new JavaScriptSerializer();
        string responseText = ser.Serialize(ret);
        context.Response.Write(responseText);
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}