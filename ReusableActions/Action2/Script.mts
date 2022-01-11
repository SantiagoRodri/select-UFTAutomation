Setting("DefaultTimeout") = 5000 @@ hightlight id_;_2297132_;_script infofile_;_ZIP::ssf23.xml_;_

Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Output CheckPoint("NexTech DataList Control 2.0") @@ hightlight id_;_3477280_;_script infofile_;_ZIP::ssf25.xml_;_

If DataTable("Patient", dtGlobalSheet) = DataTable("NexTech_DataList_Control_ComboBoxText_out1", dtGlobalSheet) Then
	Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Type DataTable("Patient", dtGlobalSheet)
    Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Type  micReturn
	Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Click 285,19
    Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Type  micReturn
Else 
	Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Type DataTable("Patient", dtGlobalSheet)
    Window("Nextech_Home_Screen").ActiveX("PatientDropdown").Type  micReturn
    Window("Nextech_Home_Screen").Dialog("ZipCodeWarning_Screen").WinButton("ZipCodeWarning_OK_Button").Click
End If @@ hightlight id_;_594604_;_script infofile_;_ZIP::ssf9.xml_;_
