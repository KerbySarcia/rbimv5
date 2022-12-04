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
   $householdRecord = $user->householdRecord;
   $householdRecordList = $user->householdRecordList;
   
   echo ($householdRecordList[0]->q1Surname);

    // Inserts value to Individual Record Table
    $individualRecordQuery = "INSERT INTO household_record(Name_of_Respondent, NO, Household, Institutional_Living_Quarter) 
                              VALUES(:Name_of_Respondent, :NO, :Household, :Institutional_Living_Quarter)";
    $stmt = $conn->prepare($individualRecordQuery);
    $stmt->bindParam(':Name_of_Respondent', $householdRecord->nameOfRespondent);
    $stmt->bindParam(':NO', $householdRecord->recordNumber);
    $stmt->bindParam(':Household', $householdRecord->household);
    $stmt->bindParam(':Institutional_Living_Quarter', $householdRecord->institutionalLivingQuarter);
    $stmt->execute();
    
    // Gets the last id and use it as foreign key
    $lastRowId = "SELECT id FROM household_record ORDER BY id DESC LIMIT 1";
    $lastRowIdExe = $conn->prepare($lastRowId);
    $lastRowIdExe->execute();
    $lastRowFetch = $lastRowIdExe->fetch();
    

    // Inserts value to Identification
    $identificationQuery = "INSERT INTO household_identification(id, Province, City_Municipality, Barangay, Household_Head, Address_A, Address_B, Address_C, Name_of_Respondent)
                            VALUES(:id, :Province, :City_Municipality, :Barangay, :Household_Head, :Address_A, :Address_B, :Address_C, :Name_of_Respondent)";
    $identificationStatement = $conn->prepare($identificationQuery);
    $identificationStatement->bindParam(':id', $lastRowFetch['id']);
    $identificationStatement->bindParam(':Province', $householdRecord->province);
    $identificationStatement->bindParam(':City_Municipality', $householdRecord->municipality);
    $identificationStatement->bindParam(':Barangay', $householdRecord->barangay);
    $identificationStatement->bindParam(':Household_Head', $householdRecord->householdHead);
    $identificationStatement->bindParam(':Address_A', $householdRecord->addressRoom);
    $identificationStatement->bindParam(':Address_B', $householdRecord->addressHouse);
    $identificationStatement->bindParam(':Address_C', $householdRecord->addressStreet);
    $identificationStatement->bindParam(':Name_of_Respondent', $householdRecord->nameOfRespondent);
    $identificationStatement->execute();

    //Inserts value to interviewInformation
   
    $interviewInformationQuery = "INSERT INTO household_interview_information(id,Visit, Date_of_Visit,Time_Start, Time_End,Result,Date_of_Next_Visit, Name_of_Interviewer_Initial_Date, Name_of_Supervisor_Initial_Date)
                                VALUES(:id, :Visit, :Date_of_Visit, :Time_Start, :Time_End,:Result, :Date_of_Next_Visit, :Name_of_Interviewer_Initial_Date, :Name_of_Supervisor_Initial_Date)";
    $interviewInformationStatement = $conn->prepare($interviewInformationQuery);
    $interviewInformationStatement->bindParam(':id', $lastRowFetch['id']);
    $interviewInformationStatement->bindParam(':Visit',$householdRecord->visit);
    $interviewInformationStatement->bindParam(':Date_of_Visit',$householdRecord->dateOfVisit);
    $interviewInformationStatement->bindParam(':Time_Start',$householdRecord->timeStart);
    $interviewInformationStatement->bindParam(':Time_End',$householdRecord->timeEnd);
    $interviewInformationStatement->bindParam(':Result',$householdRecord->result);
    $interviewInformationStatement->bindParam(':Date_of_Next_Visit',$householdRecord->dateOfNextVisit);
    $interviewInformationStatement->bindParam(':Name_of_Interviewer_Initial_Date',$householdRecord->nameOfInterviewer);
    $interviewInformationStatement->bindParam(':Name_of_Supervisor_Initial_Date',$householdRecord->nameOfSupervisorInitialAndDate);
    $interviewInformationStatement->execute();

    //Insert value to encoding_information
    $encodingInformation= "INSERT INTO household_encoding_information(id,Date_Encoded,Name_and_Initial_of_Encoder,Name_of_Supervisor_Initial_and_Date)
                            VALUES(:id,:Date_Encoded,:Name_and_Initial_of_Encoder,:Name_of_Supervisor_Initial_and_Date)";
    $encodingInformationStatement=$conn->prepare($encodingInformation); 
    $encodingInformationStatement->bindParam(':id', $lastRowFetch['id']);
    $encodingInformationStatement->bindParam(':Date_Encoded',$householdRecord->dateEncoded);
    $encodingInformationStatement->bindParam(':Name_and_Initial_of_Encoder',$householdRecord->nameAndInitialOfEncoder);
    $encodingInformationStatement->bindParam(':Name_of_Supervisor_Initial_and_Date',$householdRecord->nameOfSupervisorInitialAndDate);
    $encodingInformationStatement->execute();

    for($i=0; $i<sizeof($householdRecordList);$i++){
            //Insert value to Individual_question_part_a    
        $household_question_part_a= "INSERT INTO household_question_part_a(id, Q1_Surname, Q1_Middle_Name, Q1_First_Name, Q2, Q3, Q4, Date_of_Birth_Month, Date_of_Birth_Year, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20)
                                     Values (:id, :Q1_Surname, :Q1_Middle_Name, :Q1_First_Name, :Q2, :Q3, :Q4, :Date_of_Birth_Month, :Date_of_Birth_Year, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14, :Q15, :Q16, :Q17, :Q18, :Q19, :Q20)";
        $household_question_part_aStatement=$conn->prepare($household_question_part_a); 
        $household_question_part_aStatement->bindParam(':id', $lastRowFetch['id']);
        $household_question_part_aStatement->bindParam(':Q1_Surname',$householdRecordList[$i]->q1Surname);
        $household_question_part_aStatement->bindParam(':Q1_Middle_Name',$householdRecordList[$i]->q1FirstName);
        $household_question_part_aStatement->bindParam(':Q1_First_Name',$householdRecordList[$i]->q1MiddleName);
        $household_question_part_aStatement->bindParam(':Q2',$householdRecordList[$i]->q2);
        $household_question_part_aStatement->bindParam(':Q3',$householdRecordList[$i]->q3);
        $household_question_part_aStatement->bindParam(':Q4',$householdRecordList[$i]->q4);
        $household_question_part_aStatement->bindParam(':Date_of_Birth_Month',$householdRecordList[$i]->q5Month);
        $household_question_part_aStatement->bindParam(':Date_of_Birth_Year',$householdRecordList[$i]->q5Year);
        $household_question_part_aStatement->bindParam(':Q6',$householdRecordList[$i]->q6);
        $household_question_part_aStatement->bindParam(':Q7',$householdRecordList[$i]->q7);
        $household_question_part_aStatement->bindParam(':Q8',$householdRecordList[$i]->q8);
        $household_question_part_aStatement->bindParam(':Q9',$householdRecordList[$i]->q9);
        $household_question_part_aStatement->bindParam(':Q10',$householdRecordList[$i]->q10);
        $household_question_part_aStatement->bindParam(':Q11',$householdRecordList[$i]->q11);
        $household_question_part_aStatement->bindParam(':Q12',$householdRecordList[$i]->q12);
        $household_question_part_aStatement->bindParam(':Q13',$householdRecordList[$i]->q13);
        $household_question_part_aStatement->bindParam(':Q14',$householdRecordList[$i]->q14);
        $household_question_part_aStatement->bindParam(':Q15',$householdRecordList[$i]->q15);
        $household_question_part_aStatement->bindParam(':Q16',$householdRecordList[$i]->q16);
        $household_question_part_aStatement->bindParam(':Q17',$householdRecordList[$i]->q17);
        $household_question_part_aStatement->bindParam(':Q18',$householdRecordList[$i]->q18);
        $household_question_part_aStatement->bindParam(':Q19',$householdRecordList[$i]->q19);
        $household_question_part_aStatement->bindParam(':Q20',$householdRecordList[$i]->q20);
        $household_question_part_aStatement->execute();

        //Insert value to Individual_question_part_b
        $Individual_question_part_b= "INSERT INTO household_question_part_b(id, Q21, Q22_A, Q22_B, Q23, Q24, Q25_A, Q25_B, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33_Barangay, Q33_Municipality, Q34_Barangay, Q34_Municipality, Q35_Year, Q35_Month, Q36, Q37_Month, Q37_Year)
                                      VALUES (:id, :Q21, :Q22_A, :Q22_B, :Q23, :Q24, :Q25_A, :Q25_B, :Q26, :Q27,:Q28, :Q29, :Q30, :Q31, :Q32, :Q33_Barangay, :Q33_Municipality, :Q34_Barangay,:Q34_Municipality, :Q35_Year, :Q35_Month, :Q36, :Q37_Month, :Q37_Year)";
        $Individual_question_part_bStatement=$conn->prepare($Individual_question_part_b); 
        $Individual_question_part_bStatement->bindParam(':id', $lastRowFetch['id']);
        $Individual_question_part_bStatement->bindParam(':Q21',$householdRecordList[$i]->q21);
        $Individual_question_part_bStatement->bindParam(':Q22_A',$householdRecordList[$i]->q22A);
        $Individual_question_part_bStatement->bindParam(':Q22_B',$householdRecordList[$i]->q22B);
        $Individual_question_part_bStatement->bindParam(':Q23',$householdRecordList[$i]->q23);
        $Individual_question_part_bStatement->bindParam(':Q24',$householdRecordList[$i]->q24);
        $Individual_question_part_bStatement->bindParam(':Q25_A',$householdRecordList[$i]->q25A);
        $Individual_question_part_bStatement->bindParam(':Q25_B',$householdRecordList[$i]->q25B);
        $Individual_question_part_bStatement->bindParam(':Q26',$householdRecordList[$i]->q26);
        $Individual_question_part_bStatement->bindParam(':Q27',$householdRecordList[$i]->q27);
        $Individual_question_part_bStatement->bindParam(':Q28',$householdRecordList[$i]->q28);
        $Individual_question_part_bStatement->bindParam(':Q29',$householdRecordList[$i]->q29);
        $Individual_question_part_bStatement->bindParam(':Q30',$householdRecordList[$i]->q30);
        $Individual_question_part_bStatement->bindParam(':Q31',$householdRecordList[$i]->q31);
        $Individual_question_part_bStatement->bindParam(':Q32',$householdRecordList[$i]->q32);
        $Individual_question_part_bStatement->bindParam(':Q33_Barangay',$householdRecordList[$i]->q33A);
        $Individual_question_part_bStatement->bindParam(':Q33_Municipality',$householdRecordList[$i]->q33B);
        $Individual_question_part_bStatement->bindParam(':Q34_Barangay',$householdRecordList[$i]->q34A);
        $Individual_question_part_bStatement->bindParam(':Q34_Municipality',$householdRecordList[$i]->q34B);
        $Individual_question_part_bStatement->bindParam(':Q35_Year',$householdRecordList[$i]->q35A);
        $Individual_question_part_bStatement->bindParam(':Q35_Month',$householdRecordList[$i]->q35B);
        $Individual_question_part_bStatement->bindParam(':Q36',$householdRecordList[$i]->q36);
        $Individual_question_part_bStatement->bindParam(':Q37_Month',$householdRecordList[$i]->q37A);
        $Individual_question_part_bStatement->bindParam(':Q37_Year',$householdRecordList[$i]->q37B);
        $Individual_question_part_bStatement->execute();

        //Insert value to Individual_question_part_c
        $Individual_question_part_c= "INSERT INTO  household_question_part_c(id, Q38_A, Q38_B, Q38_C, Q39_Month, Q39_Year, Q40_A, Q40_B, Q40C, Q41, Q42_A, Q42_B, 	Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50_A, Q50_B, Q51, Q52, Q53)
                                      VALUES (:id, :Q38_A, :Q38_B, :Q38_C, :Q39_Month, :Q39_Year, :Q40_A, :Q40_B, :Q40C, :Q41, :Q42_A, :Q42_B, :Q43, :Q44, :Q45, :Q46, :Q47, :Q48, :Q49, :Q50_A, :Q50_B, :Q51, :Q52, :Q53)";
        $Individual_question_part_cStatement=$conn->prepare($Individual_question_part_c);
        $Individual_question_part_cStatement->bindParam(':id', $lastRowFetch['id']);
        $Individual_question_part_cStatement->bindParam(':Q38_A',$householdRecordList[$i]->q38A);
        $Individual_question_part_cStatement->bindParam(':Q38_B',$householdRecordList[$i]->q38B);
        $Individual_question_part_cStatement->bindParam(':Q38_C',$householdRecordList[$i]->q38C);
        $Individual_question_part_cStatement->bindParam(':Q39_Month',$householdRecordList[$i]->q39A);
        $Individual_question_part_cStatement->bindParam(':Q39_Year',$householdRecordList[$i]->q39B);
        $Individual_question_part_cStatement->bindParam(':Q40_A',$householdRecordList[$i]->q40A);
        $Individual_question_part_cStatement->bindParam(':Q40_B',$householdRecordList[$i]->q40B);
        $Individual_question_part_cStatement->bindParam(':Q40C',$householdRecordList[$i]->q40C);
        $Individual_question_part_cStatement->bindParam(':Q41',$householdRecordList[$i]->q41);
        $Individual_question_part_cStatement->bindParam(':Q42_A',$householdRecordList[$i]->q42A);
        $Individual_question_part_cStatement->bindParam(':Q42_B',$householdRecordList[$i]->q42B);
        $Individual_question_part_cStatement->bindParam(':Q43',$householdRecordList[$i]->q43);
        $Individual_question_part_cStatement->bindParam(':Q44',$householdRecordList[$i]->q44);
        $Individual_question_part_cStatement->bindParam(':Q45',$householdRecordList[$i]->q45);
        $Individual_question_part_cStatement->bindParam(':Q46',$householdRecordList[$i]->q46);
        $Individual_question_part_cStatement->bindParam(':Q47',$householdRecordList[$i]->q47);
        $Individual_question_part_cStatement->bindParam(':Q48',$householdRecordList[$i]->q48);
        $Individual_question_part_cStatement->bindParam(':Q49',$householdRecordList[$i]->q49);
        $Individual_question_part_cStatement->bindParam(':Q50_A',$householdRecordList[$i]->q50A);
        $Individual_question_part_cStatement->bindParam('Q50_B',$householdRecordList[$i]->q50B);
        $Individual_question_part_cStatement->bindParam(':Q51',$householdRecordList[$i]->q51);
        $Individual_question_part_cStatement->bindParam(':Q52',$householdRecordList[$i]->q52);
        $Individual_question_part_cStatement->bindParam(':Q53',$householdRecordList[$i]->q53);
        $Individual_question_part_cStatement->execute();

        //Insert value to Individual_question_part_d
         $Individual_question_part_d= "INSERT INTO household_question_part_d(id, Q54_Age, Q54_Cause_of_Death, Q55_Age, Q55_Sex, Q55_Cause_of_Death, Q56_A, Q56_B, Q56_C, Q57_A, Q57_B, Q57_C, Q58_Barangay, Q58_Municipality, Q58_Province)
                                       VALUES(:id, :Q54_Age, :Q54_Cause_of_Death, :Q55_Age, :Q55_Sex, :Q55_Cause_of_Death, :Q56_A, :Q56_B, :Q56_C, :Q57_A, :Q57_B, :Q57_C, :Q58_Barangay, :Q58_Municipality, :Q58_Province)";
         $Individual_question_part_dStatement=$conn->prepare($Individual_question_part_d);
         $Individual_question_part_dStatement->bindParam(':id', $lastRowFetch['id']);
         $Individual_question_part_dStatement->bindParam(':Q54_Age',$householdRecordList[$i]->q54Age);
         $Individual_question_part_dStatement->bindParam(':Q54_Cause_of_Death',$householdRecordList[$i]->q54CauseOfDeath);
         $Individual_question_part_dStatement->bindParam(':Q55_Age',$householdRecordList[$i]->q55Age);
         $Individual_question_part_dStatement->bindParam(':Q55_Sex',$householdRecordList[$i]->q55Sex);
         $Individual_question_part_dStatement->bindParam(':Q55_Cause_of_Death',$householdRecordList[$i]->q55CauseOfDeath);
         $Individual_question_part_dStatement->bindParam(':Q56_A',$householdRecordList[$i]->q56A);
         $Individual_question_part_dStatement->bindParam(':Q56_B',$householdRecordList[$i]->q56B);
         $Individual_question_part_dStatement->bindParam(':Q56_C',$householdRecordList[$i]->q56C);
         $Individual_question_part_dStatement->bindParam(':Q57_A',$householdRecordList[$i]->q57A);
         $Individual_question_part_dStatement->bindParam(':Q57_B',$householdRecordList[$i]->q57B);
         $Individual_question_part_dStatement->bindParam(':Q57_C',$householdRecordList[$i]->q57C);
         $Individual_question_part_dStatement->bindParam(':Q58_Barangay',$householdRecordList[$i]->q58Barangay);
         $Individual_question_part_dStatement->bindParam(':Q58_Municipality',$householdRecordList[$i]->q58Municipality);
         $Individual_question_part_dStatement->bindParam(':Q58_Province',$householdRecordList[$i]->q58Province);
         $Individual_question_part_dStatement->execute();
    }

    break;
 }

?>