Param(
	[string]$Folder
)

Import-Module 'C:\Program Files\Microsoft Dynamics NAV\90\Service\Microsoft.Dynamics.Nav.Management.dll'

Function RegisterClientAddIn
{
    Param(
		[String]$AddIn,
		[String]$Source
    )

	$arg = "$AddIn"
	if ($Source -ne "")
	{
		$arg = "$arg;$([System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes($Source)))"
	}
	Invoke-NAVCodeunit -ServerInstance DynamicsNAV90 -CodeunitId 99999 -MethodName RegisterJavaScriptAddInFromBase64 -Argument "$arg"
}

RegisterClientAddIn -AddIn "JavascriptControlAddIn;dcce7894fd66d083;1.0.0.0;NAV Control Add-In Template" -Source "$($Folder)Resource\JavascriptControlAddIn.zip"
