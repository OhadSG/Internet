<%@ Page Title="" Language="C#" MasterPageFile="~/Pages/MasterPage.master" AutoEventWireup="true" CodeFile="NewCode.aspx.cs" Inherits="Pages_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="phHead" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="phBody" Runat="Server">
    <input type="text" id="0" name="ND" lang="en-us" class="Line" onkeydown="GetKey(event, this)" autocomplete="off"/>
    <script src="/Scripts/NewCode.js" type="text/javascript"></script>
</asp:Content>

