namespace JavascriptControlAddIn
{
    /// <summary>
    /// For Sending Data to Microsoft Dynamics NAV
    /// </summary>
    /// <param name="data"></param>
    public delegate void DataEventHandler(string data);

    /// <summary>
    /// Send JS exception error text to Microsoft Dynamics NAV
    /// try catch block
    /// </summary>
    /// <param name="data"></param>
    public delegate void ErrorEventHandler(string jserrortext);
}
