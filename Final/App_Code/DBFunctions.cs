using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
public class DBFunctions
{
    public static void ExecuteNonQuery(string commandText)
    {
        SqlConnection connection = new SqlConnection($@"Data Source=(localdb)\ProjectsV13;Initial Catalog=CodingWebsite;");
        SqlCommand command = new SqlCommand(commandText, connection);
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }

    public static object ExecuteScalar(string commandText)
    {
        SqlConnection connection = new SqlConnection($@"Data Source=(localdb)\ProjectsV13;Initial Catalog=CodingWebsite;");
        SqlCommand command = new SqlCommand(commandText, connection);
        connection.Open();
        object ret = command.ExecuteScalar();
        connection.Close();
        return ret;
    }

    public static int InsertCode(string title, string users)
    {
        string query = $" INSERT INTO Codes([Title], [Users]) VALUES('{title}', '{users}') ";
        ExecuteNonQuery(query);
        query = $" SELECT [Id] FROM Codes WHERE [Title] = '{title}' ";
        return (int)ExecuteScalar(query);
    }
    public static List<object> GetCodes(int id)
    {
        List<object> contentItems = new List<object>();
        List<string> ids = SelectCodeAttribute("Id");
        List<string> titles = SelectCodeAttribute("Title");
        List<string> users = SelectCodeAttribute("Users");

        for (int i = 0; i < titles.Count; i++)
            if (users[i].Split().Contains(id.ToString()))
                contentItems.Add(new { Id = ids[i], Title = titles[i], Users = users[i] });
        return contentItems;
    }

    private static List<string> SelectCodeAttribute(string attribute)
    {
        List<string> attributes = new List<string>();
        SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=CodingWebsite;");
        conn.Open();

        string select = $" SELECT [{attribute}] FROM Codes ";
        SqlCommand cmd = new SqlCommand(select, conn);
        SqlDataReader reader = cmd.ExecuteReader();

        while (reader.Read())
            attributes.Add(reader[attribute].ToString());

        conn.Close();
        return attributes;
    }
    public static int InsertUser(string email, string username, string password)
    {
        string query = $" INSERT INTO Users([Email], [Username], [Password]) VALUES('{email}', '{username}', '{password}')";
        ExecuteNonQuery(query);
        return TryLogin(username, password).Value;
    }

    public static string Login(string username, string password)
    {
        if (UsernameExists(username))
        {
            int? Id = TryLogin(username, password);
            if (Id.HasValue)
            {
                return $"{Id.Value}";
            }
            else return "Password";
        }
        else return "Username";
    }

    public static int? TryLogin(string username, string password)
    {
        string query = $" SELECT [Id] FROM Users WHERE [Username] = '{username}' AND [Password] = '{password}' ";
        return (int?)ExecuteScalar(query);
    }

    public static bool EmailExists(string email)
    {
        string query = $" SELECT COUNT(*) FROM Users WHERE [Email] = '{email}' ";
        return (int)ExecuteScalar(query) > 0;
    }
    public static bool UsernameExists(string username)
    {
        string query = $" SELECT COUNT(*) FROM Users WHERE [Username] = '{username}' ";
        return (int)ExecuteScalar(query) > 0;
    }
}