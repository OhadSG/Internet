<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/MasterPage.master" AutoEventWireup="true" CodeFile="Home.aspx.cs" Inherits="Pages_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="phHead" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="phBody" Runat="Server">
    <table id="CodesTable" style="text-align:center; width: 100%;"></table>
    <div id="create" class="overlay" style="display:none;">
        <form class="Form" action="/Handlers/CreateCode.ashx" method="post" onsubmit="SubmitForm(this, Create); return false;">
            <table class="Form"> 
                <tr>
                    <td>
                        <label for="titleCreate" class="Form">Title<a style="float:right; font-family: cursive; cursor: pointer; margin-top: -3%; margin-right: -3%;" onclick="CloseCreate()">X</a></label>
                        <input type="text" id="titleCreate" name="titleCreate" class="Form" maxlength="16" required/>
                    </td>
                </tr>

                <tr>
                    <td>
                        <input type="submit" value="Create" class="Submit"/>
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <script type="text/javascript" src="/Scripts/Codes.js"></script>
</asp:Content>

