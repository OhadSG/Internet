using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace DBFunctions
{
    class DBFunctions
    {
        public static void InsertContentItem(string title, string description, int userID, string path)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            conn.Open();

            string insert = " INSERT INTO ContentItems([Title], [Description], [UserID], [Path]) " +
                            String.Format(" VALUES('{0}', '{1}', '{2}', '{3}')", title, description, userID, path);

            SqlCommand cmd = new SqlCommand(insert, conn);
            cmd.ExecuteNonQuery();

            conn.Close();
        }
        public static object[] SelectAllContentItems()
        {
            object[] contentItems = new object[CountContentItems()];
            List<string> ids = SelectContentAttribute("Id");
            List<string> titles = SelectContentAttribute("Title");
            List<string> descriptions = SelectContentAttribute("Description");
            List<string> userIDs = SelectContentAttribute("UserID");
            List<string> paths = SelectContentAttribute("Path");

            for (int i = 0; i < contentItems.Length; i++)
            {
                Console.WriteLine("ID: {0} Title: {1} Description: {2} UserID: {3} Path: {4}", ids[i], titles[i], descriptions[i], userIDs[i], paths[i]);
                contentItems[i] = new {Id = ids[i], Name = titles[i], Description = descriptions[i], UserID = userIDs[i], Path = paths[i] };
            }
            return contentItems;
        }
        public static int CountContentItems()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            string query = " SELECT COUNT(*) FROM ContentItems ";
            SqlCommand cmd = new SqlCommand(query, conn);
            conn.Open();

            int count = (int)cmd.ExecuteScalar();

            conn.Close();
            Console.WriteLine("Content Items Count: {0}", count);
            return count;
        }
        public static List<string> SelectContentAttribute(string attribute)
        {
            List<string> attributes = new List<string>();
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            conn.Open();

            string select = " SELECT [" + attribute + "] FROM ContentItems ";
            SqlCommand cmd = new SqlCommand(select, conn);
            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
                attributes.Add(reader[attribute].ToString());

            conn.Close();
            return attributes;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

        public static bool InsertUser(string username, string password, string firstName, string lastName, string dateOfBirth, string email, string country)
        {
            if (UsernameExists(username))
                return false;
            else
            {
                SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
                conn.Open();

                string query = "INSERT INTO Users([Username], [Password], [First Name], [Last Name], [Date Of Birth], [Email], [Country]) " +
                    String.Format(" VALUES('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}') ", username, password, firstName, lastName, dateOfBirth, email, country);

                SqlCommand cmd = new SqlCommand(query, conn);
                cmd.ExecuteNonQuery();

                conn.Close();
                return true;
            }
        }
        public static object[] SelectAllUsers()
        {
            object[] users = new object[CountUsers()];
            List<string> ids = SelectUserAttribute("Id");
            List<string> usernames = SelectUserAttribute("Username");
            List<string> passwords = SelectUserAttribute("Password");
            List<string> firstNames = SelectUserAttribute("First Name");
            List<string> lastNames = SelectUserAttribute("Last Name");
            List<string> datesOfBirth = SelectUserAttribute("Date Of Birth");
            List<string> emails = SelectUserAttribute("Email");
            List<string> countries = SelectUserAttribute("Country");

            for (int i = 0; i < users.Length; i++)
            {
                Console.WriteLine("ID: {0} Username: {1} Password: {2} First Name: {3} Last Name: {4} Date Of Birth: {5} Email: {6} Country: {7}", ids[i], usernames[i], passwords[i], firstNames[i], lastNames[i], datesOfBirth[i], emails[i], countries[i]);
                users[i] = new { Id = ids[i], Username = usernames[i], Password = passwords[i], FirstName = firstNames[i], LastName = lastNames[i], DateOfBirth = datesOfBirth[i], Email = emails[i], Country = countries[i] };
            }
            return users;
        }
        public static int CountUsers()
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            string query = " SELECT COUNT(*) FROM Users ";
            SqlCommand cmd = new SqlCommand(query, conn);
            conn.Open();

            int count = (int)cmd.ExecuteScalar();

            conn.Close();
            Console.WriteLine("User Count: {0}", count);
            return count;
        }

        public static bool TryLogin(string username, string password)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            conn.Open();

            string query = " SELECT COUNT([Username]) FROM Users WHERE[Username] = '" + username + "' AND [Password] = '" + password + "'";

            SqlCommand cmd = new SqlCommand(query, conn);

            int count = (int)cmd.ExecuteScalar();

            conn.Close();
            return count == 1? true : false;
        }
        public static bool UsernameExists(string username)
        {
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            string query = " SELECT COUNT([Username]) FROM Users WHERE[Username] = '" + username + "' ";
            SqlCommand cmd = new SqlCommand(query, conn);
            conn.Open();

            bool b = (int)cmd.ExecuteScalar() > 0 ? true : false;

            conn.Close();
            return b;
        }
        public static List<string> SelectUserAttribute(string attribute)
        {
            List<string> attributes = new List<string>();
            SqlConnection conn = new SqlConnection(@"Data Source=(localdb)\ProjectsV13;Initial Catalog=PetsDB;");
            conn.Open();

            string select = " SELECT [" + attribute + "] FROM Users ";
            SqlCommand cmd = new SqlCommand(select, conn);
            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
                attributes.Add(reader[attribute].ToString());

            conn.Close();
            return attributes;
        }
    }
}
