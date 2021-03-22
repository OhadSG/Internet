<%@ WebHandler Language="C#" Class="Registration" %>

using System;
using System.Web;
using System.Web.Script.Serialization;
using System.Collections.Generic;
using System.Web.SessionState;

public class Registration : IHttpHandler, IRequiresSessionState {

    public void ProcessRequest (HttpContext context) {
        Dictionary<string, string> ret = new Dictionary<string, string>();
        ret.Add("code", "");

        string email = context.Request["emailReg"];
        string username = context.Request["usernameReg"];
        string password = context.Request["passwordReg"];
        string repassword = context.Request["repasswordReg"];

        if (DBFunctions.EmailExists(email)) ret["code"] = "Email";
        else if (DBFunctions.UsernameExists(username)) ret["code"] = "Username";
        else if (password != repassword) ret["code"] = "Password";
        else
        {
            int id = DBFunctions.InsertUser(email, username, password);
            ret["code"] = "Success";
            ret.Add("username", username);
            context.Session["UserId"] = id;
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