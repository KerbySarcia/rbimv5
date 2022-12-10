<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DB_Connect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case "POST":
    $user = json_decode(file_get_contents('php://input'));
    $questions = $user->questions;
    $individualRecord = $user->individualRecord;
    
    
    // Inserts value to Individual Record Table
    $individualRecordQuery = "INSERT INTO individual_record(Name_of_Respondent,Total_Number_of_Household, NO, Household, Institutional_Living_Quarter) 
                              VALUES(:Name_of_Respondent,:Total_Number_of_Household, :NO, :Household, :Institutional_Living_Quarter)";
    $stmt = $conn->prepare($individualRecordQuery);
    $stmt->bindParam(':Name_of_Respondent', $individualRecord->nameOfRespondent);
    $stmt->bindParam(':Total_Number_of_Household', $individualRecord->totalNumberOfHouseholdMembers);
    $stmt->bindParam(':NO', $individualRecord->recordNumber);
    $stmt->bindParam(':Household', $individualRecord->household);
    $stmt->bindParam(':Institutional_Living_Quarter', $individualRecord->institutionalLivingQuarter);
    $stmt->execute();
    
    // Gets the last id and use it as foreign key
    $lastRowId = "SELECT id FROM individual_record ORDER BY id DESC LIMIT 1";
    $lastRowIdExe = $conn->prepare($lastRowId);
    $lastRowIdExe->execute();
    $lastRowFetch = $lastRowIdExe->fetch();
    

    // Inserts value to Identification
    $identificationQuery = "INSERT INTO identification(id, Province, City_Municipality, Barangay, Household_Head, Address_A, Address_B, Address_C, Name_of_Respondent)
                            VALUES(:id, :Province, :City_Municipality, :Barangay, :Household_Head, :Address_A, :Address_B, :Address_C, :Name_of_Respondent)";
    $identificationStatement = $conn->prepare($identificationQuery);
    $identificationStatement->bindParam(':id', $lastRowFetch['id']);
    $identificationStatement->bindParam(':Province', $individualRecord->province);
    $identificationStatement->bindParam(':City_Municipality', $individualRecord->municipality);
    $identificationStatement->bindParam(':Barangay', $individualRecord->barangay);
    $identificationStatement->bindParam(':Household_Head', $individualRecord->householdHead);
    $identificationStatement->bindParam(':Address_A', $individualRecord->addressRoom);
    $identificationStatement->bindParam(':Address_B', $individualRecord->addressHouse);
    $identificationStatement->bindParam(':Address_C', $individualRecord->addressStreet);
    $identificationStatement->bindParam(':Name_of_Respondent', $individualRecord->nameOfRespondent);
    $identificationStatement->execute();

    //Inserts value to interviewInformation
   
    $interviewInformationQuery = "INSERT INTO interview_information(id,Visit, Date_of_Visit,Time_Start, Time_End,Result,Date_of_Next_Visit, Name_of_Interviewer_Initial_Date, Name_of_Supervisor_Initial_Date)
                                VALUES(:id, :Visit, :Date_of_Visit, :Time_Start, :Time_End,:Result, :Date_of_Next_Visit, :Name_of_Interviewer_Initial_Date, :Name_of_Supervisor_Initial_Date)";
    $interviewInformationStatement = $conn->prepare($interviewInformationQuery);
    $interviewInformationStatement->bindParam(':id', $lastRowFetch['id']);
    $interviewInformationStatement->bindParam(':Visit',$individualRecord->visit);
    $interviewInformationStatement->bindParam(':Date_of_Visit',$individualRecord->dateOfVisit);
    $interviewInformationStatement->bindParam(':Time_Start',$individualRecord->timeStart);
    $interviewInformationStatement->bindParam(':Time_End',$individualRecord->timeEnd);
    $interviewInformationStatement->bindParam(':Result',$individualRecord->result);
    $interviewInformationStatement->bindParam(':Date_of_Next_Visit',$individualRecord->dateOfNextVisit);
    $interviewInformationStatement->bindParam(':Name_of_Interviewer_Initial_Date',$individualRecord->nameOfInterviewer);
    $interviewInformationStatement->bindParam(':Name_of_Supervisor_Initial_Date',$individualRecord->nameOfSupervisorInitialAndDate);
    $interviewInformationStatement->execute();


    //Insert value to encoding_information
    $encodingInformation= "INSERT INTO encoding_information(id,Date_Encoded,Name_and_Initial_of_Encoder,Name_of_Supervisor_Initial_and_Date)
                            VALUES(:id,:Date_Encoded,:Name_and_Initial_of_Encoder,:Name_of_Supervisor_Initial_and_Date)";
    $encodingInformationStatement=$conn->prepare($encodingInformation); 
    $encodingInformationStatement->bindParam(':id', $lastRowFetch['id']);
    $encodingInformationStatement->bindParam(':Date_Encoded',$individualRecord->dateEncoded);
    $encodingInformationStatement->bindParam(':Name_and_Initial_of_Encoder',$individualRecord->nameAndInitialOfEncoder);
    $encodingInformationStatement->bindParam(':Name_of_Supervisor_Initial_and_Date',$individualRecord->nameOfSupervisorInitialAndDate);
    $encodingInformationStatement->execute();

    //Insert value to Individual_question_part_a
    $Individual_question_part_a= "INSERT INTO Individual_question_part_a(id, Q1_Surname, Q1_Middle_Name, Q1_First_Name, Q2, Q3, Q4, Date_of_Birth_Month, Date_of_Birth_Year, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20)
                                  Values (:id, :Q1_Surname, :Q1_Middle_Name, :Q1_First_Name, :Q2, :Q3, :Q4, :Date_of_Birth_Month, :Date_of_Birth_Year, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14, :Q15, :Q16, :Q17, :Q18, :Q19, :Q20)";
    $Individual_question_part_aStatement=$conn->prepare($Individual_question_part_a); 
    $Individual_question_part_aStatement->bindParam(':id', $lastRowFetch['id']);
    $Individual_question_part_aStatement->bindParam(':Q1_Surname',$questions->q1Surname);
    $Individual_question_part_aStatement->bindParam(':Q1_Middle_Name',$questions->q1FirstName);
    $Individual_question_part_aStatement->bindParam(':Q1_First_Name',$questions->q1MiddleName);
    $Individual_question_part_aStatement->bindParam(':Q2',$questions->q2);
    $Individual_question_part_aStatement->bindParam(':Q3',$questions->q3);
    $Individual_question_part_aStatement->bindParam(':Q4',$questions->q4);
    $Individual_question_part_aStatement->bindParam(':Date_of_Birth_Month',$questions->q5Month);
    $Individual_question_part_aStatement->bindParam(':Date_of_Birth_Year',$questions->q5Year);
    $Individual_question_part_aStatement->bindParam(':Q6',$questions->q6);
    $Individual_question_part_aStatement->bindParam(':Q7',$questions->q7);
    $Individual_question_part_aStatement->bindParam(':Q8',$questions->q8);
    $Individual_question_part_aStatement->bindParam(':Q9',$questions->q9);
    $Individual_question_part_aStatement->bindParam(':Q10',$questions->q10);
    $Individual_question_part_aStatement->bindParam(':Q11',$questions->q11);
    $Individual_question_part_aStatement->bindParam(':Q12',$questions->q12);
    $Individual_question_part_aStatement->bindParam(':Q13',$questions->q13);
    $Individual_question_part_aStatement->bindParam(':Q14',$questions->q14);
    $Individual_question_part_aStatement->bindParam(':Q15',$questions->q15);
    $Individual_question_part_aStatement->bindParam(':Q16',$questions->q16);
    $Individual_question_part_aStatement->bindParam(':Q17',$questions->q17);
    $Individual_question_part_aStatement->bindParam(':Q18',$questions->q18);
    $Individual_question_part_aStatement->bindParam(':Q19',$questions->q19);
    $Individual_question_part_aStatement->bindParam(':Q20',$questions->q20);
    $Individual_question_part_aStatement->execute();

    //Insert value to Individual_question_part_b
    $Individual_question_part_b= "INSERT INTO Individual_question_part_b(id, Q21, Q22_A, Q22_B, Q23, Q24, Q25_A, Q25_B, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33_Barangay, Q33_Municipality, Q34_Barangay, Q34_Municipality, Q35_Year, Q35_Month, Q36, Q37_Month, Q37_Year)
                                  VALUES (:id, :Q21, :Q22_A, :Q22_B, :Q23, :Q24, :Q25_A, :Q25_B, :Q26, :Q27,:Q28, :Q29, :Q30, :Q31, :Q32, :Q33_Barangay, :Q33_Municipality, :Q34_Barangay,:Q34_Municipality, :Q35_Year, :Q35_Month, :Q36, :Q37_Month, :Q37_Year)";
    $Individual_question_part_bStatement=$conn->prepare($Individual_question_part_b); 
    $Individual_question_part_bStatement->bindParam(':id', $lastRowFetch['id']);
    $Individual_question_part_bStatement->bindParam(':Q21',$questions->q21);
    $Individual_question_part_bStatement->bindParam(':Q22_A',$questions->q22A);
    $Individual_question_part_bStatement->bindParam(':Q22_B',$questions->q22B);
    $Individual_question_part_bStatement->bindParam(':Q23',$questions->q23);
    $Individual_question_part_bStatement->bindParam(':Q24',$questions->q24);
    $Individual_question_part_bStatement->bindParam(':Q25_A',$questions->q25A);
    $Individual_question_part_bStatement->bindParam(':Q25_B',$questions->q25B);
    $Individual_question_part_bStatement->bindParam(':Q26',$questions->q26);
    $Individual_question_part_bStatement->bindParam(':Q27',$questions->q27);
    $Individual_question_part_bStatement->bindParam(':Q28',$questions->q28);
    $Individual_question_part_bStatement->bindParam(':Q29',$questions->q29);
    $Individual_question_part_bStatement->bindParam(':Q30',$questions->q30);
    $Individual_question_part_bStatement->bindParam(':Q31',$questions->q31);
    $Individual_question_part_bStatement->bindParam(':Q32',$questions->q32);
    $Individual_question_part_bStatement->bindParam(':Q33_Barangay',$questions->q33A);
    $Individual_question_part_bStatement->bindParam(':Q33_Municipality',$questions->q33B);
    $Individual_question_part_bStatement->bindParam(':Q34_Barangay',$questions->q34A);
    $Individual_question_part_bStatement->bindParam(':Q34_Municipality',$questions->q34B);
    $Individual_question_part_bStatement->bindParam(':Q35_Year',$questions->q35A);
    $Individual_question_part_bStatement->bindParam(':Q35_Month',$questions->q35B);
    $Individual_question_part_bStatement->bindParam(':Q36',$questions->q36);
    $Individual_question_part_bStatement->bindParam(':Q37_Month',$questions->q37A);
    $Individual_question_part_bStatement->bindParam(':Q37_Year',$questions->q37B);
    $Individual_question_part_bStatement->execute();

    //Insert value to Individual_question_part_c
    $Individual_question_part_c= "INSERT INTO  Individual_question_part_c(id, Q38_A, Q38_B, Q38_C, Q39_Month, Q39_Year, Q40_A, Q40_B, Q40C, Q41, Q42_A, Q42_B, 	Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50_A, Q50_B, Q51, Q52, Q53)
                                  VALUES (:id, :Q38_A, :Q38_B, :Q38_C, :Q39_Month, :Q39_Year, :Q40_A, :Q40_B, :Q40C, :Q41, :Q42_A, :Q42_B, :Q43, :Q44, :Q45, :Q46, :Q47, :Q48, :Q49, :Q50_A, :Q50_B, :Q51, :Q52, :Q53)";
    $Individual_question_part_cStatement=$conn->prepare($Individual_question_part_c);
    $Individual_question_part_cStatement->bindParam(':id', $lastRowFetch['id']);
    $Individual_question_part_cStatement->bindParam(':Q38_A',$questions->q38A);
    $Individual_question_part_cStatement->bindParam(':Q38_B',$questions->q38B);
    $Individual_question_part_cStatement->bindParam(':Q38_C',$questions->q38C);
    $Individual_question_part_cStatement->bindParam(':Q39_Month',$questions->q39A);
    $Individual_question_part_cStatement->bindParam(':Q39_Year',$questions->q39B);
    $Individual_question_part_cStatement->bindParam(':Q40_A',$questions->q40A);
    $Individual_question_part_cStatement->bindParam(':Q40_B',$questions->q40B);
    $Individual_question_part_cStatement->bindParam(':Q40C',$questions->q40C);
    $Individual_question_part_cStatement->bindParam(':Q41',$questions->q41);
    $Individual_question_part_cStatement->bindParam(':Q42_A',$questions->q42A);
    $Individual_question_part_cStatement->bindParam(':Q42_B',$questions->q42B);
    $Individual_question_part_cStatement->bindParam(':Q43',$questions->q43);
    $Individual_question_part_cStatement->bindParam(':Q44',$questions->q44);
    $Individual_question_part_cStatement->bindParam(':Q45',$questions->q45);
    $Individual_question_part_cStatement->bindParam(':Q46',$questions->q46);
    $Individual_question_part_cStatement->bindParam(':Q47',$questions->q47);
    $Individual_question_part_cStatement->bindParam(':Q48',$questions->q48);
    $Individual_question_part_cStatement->bindParam(':Q49',$questions->q49);
    $Individual_question_part_cStatement->bindParam(':Q50_A',$questions->q50A);
    $Individual_question_part_cStatement->bindParam('Q50_B',$questions->q50B);
    $Individual_question_part_cStatement->bindParam(':Q51',$questions->q51);
    $Individual_question_part_cStatement->bindParam(':Q52',$questions->q52);
    $Individual_question_part_cStatement->bindParam(':Q53',$questions->q53);
    $Individual_question_part_cStatement->execute();
    
    //Insert value to Individual_question_part_d
    $Individual_question_part_d= "INSERT INTO Individual_question_part_d(id, Q54_Age, Q54_Cause_of_Death, Q55_Age, Q55_Sex, Q55_Cause_of_Death, Q56_A, Q56_B, Q56_C, Q57_A, Q57_B, Q57_C, Q58_Barangay, Q58_Municipality, Q58_Province)
                                  VALUES(:id, :Q54_Age, :Q54_Cause_of_Death, :Q55_Age, :Q55_Sex, :Q55_Cause_of_Death, :Q56_A, :Q56_B, :Q56_C, :Q57_A, :Q57_B, :Q57_C, :Q58_Barangay, :Q58_Municipality, :Q58_Province)";
    $Individual_question_part_dStatement=$conn->prepare($Individual_question_part_d);
    $Individual_question_part_dStatement->bindParam(':id', $lastRowFetch['id']);
    $Individual_question_part_dStatement->bindParam(':Q54_Age',$questions->q54Age);
    $Individual_question_part_dStatement->bindParam(':Q54_Cause_of_Death',$questions->q54CauseOfDeath);
    $Individual_question_part_dStatement->bindParam(':Q55_Age',$questions->q55Age);
    $Individual_question_part_dStatement->bindParam(':Q55_Sex',$questions->q55Sex);
    $Individual_question_part_dStatement->bindParam(':Q55_Cause_of_Death',$questions->q55CauseOfDeath);
    $Individual_question_part_dStatement->bindParam(':Q56_A',$questions->q56A);
    $Individual_question_part_dStatement->bindParam(':Q56_B',$questions->q56B);
    $Individual_question_part_dStatement->bindParam(':Q56_C',$questions->q56C);
    $Individual_question_part_dStatement->bindParam(':Q57_A',$questions->q57A);
    $Individual_question_part_dStatement->bindParam(':Q57_B',$questions->q57B);
    $Individual_question_part_dStatement->bindParam(':Q57_C',$questions->q57C);
    $Individual_question_part_dStatement->bindParam(':Q58_Barangay',$questions->q58Barangay);
    $Individual_question_part_dStatement->bindParam(':Q58_Municipality',$questions->q58Municipality);
    $Individual_question_part_dStatement->bindParam(':Q58_Province',$questions->q58Province);
    $Individual_question_part_dStatement->execute();
    break;
}

?>