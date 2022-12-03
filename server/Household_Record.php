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
    case 'POST':
        $user = json_decode(file_get_contents('php://input'));
        $questions = $user->questions;
        $imageFileName = $user->imageFileName;
        $householdRecord = $user->householdRecord;

        //  Inserts value into Household Record Table.
        $householdRecordQuery = "INSERT INTO household_record(Name_of_Respondent, NO, Household, Institutional_Living_Quarter)
                                 VALUES(:Name_of_Respondent, :NO, :Household, : Institutional_Living_Quarter)";
        $stmt = $conn->prepare($householdRecordQuery);
        $stmt->bindParam(':Name_of_Respondent', $householdRecord->nameOfRespondent);
        $stmt->bindParam(':NO', $householdRecord->recordNumber);
        $stmt->bindParam(':Household', $householdRecord->household);
        $stmt->bindParam(':Institutional_Living_Quarter', $householdRecord->institutionalLivingQuarter);
        $stmt->execute();

        // Gets the last id and use it as foreign key.
        $lastRowId = "SELECT id FROM household_record ORDER BY id DESC LIMIT 1";
        $lastRowIdExe = $conn->prepare($lastRowId);
        $lastRowIdExe->execute();
        $lastRowFetch = $lastRowIdExe->fetch();

        // Inserts value to Identification.
        $identificationQuery = "INSERT INTO identification(id, Province, City_Municipality, Barangay, Household_Head, Address_A, Address_B, Address_C, Name_of_Respondent)
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

        // Inserts value to Interview Information.
        $interviewInformationStatement = "INSERT INTO interview_information(id, Visit, Date_of_Visit, Time_Start, Time_End, Result, Date_of_Next_Visit, Name_of_Interviewer_Initial_Date, Name_of_Supervisor_Initial_Date)
                                          VALUES(:id, :Visit, :Date_of_Visit, :Time_Start, :Time_End, :Result, :Date_of_Next_Visit, :Name_of_Interviewer_Initial_Date, :Name_of_Supervisor_Initial_Date)";
        $interviewInformationStatement->bindParam(':id', $lastRowFetch['id']);
        $interviewInformationStatement->bindParam(':Visit', $householdRecord->visit);
        $interviewInformationStatement->bindParam(':Date_of_Visit', $householdRecord->dateOfVisit);
        $interviewInformationStatement->bindParam(':Time_Start', $householdRecord->timeStart);
        $interviewInformationStatement->bindParam(':Time_End', $householdRecord->timeEnd);
        $interviewInformationStatement->bindParam(':Result', $householdRecord->result);
        $interviewInformationStatement->bindParam(':Date_of_Next_Visit', $householdRecord->dateOfNextVisit);
        $interviewInformationStatement->bindParam(':Name_of_Interviewer_Initial_Date', $householdRecord->nameAndInitialOfEncoder);
        $interviewInformationStatement->bindParam(':Name_of_Supervisor_Initial_Date', $householdRecord->nameOfSupervisorInitialDate);
        $interviewInformationStatement->execute();

        //  Inserts value to Encoding Information.
        $encodingInformationQuery = "INSERT INTO encoding_information(id, Date_Encoded, Name_and_Initial_of_Encoder, Name_of_Supervisor_Initial_and_Date)
                                     VALUES(:id, :Date_Encoded, :Name_and_Initial_of_Encoder, :Name_of_Supervisor_Initial_and_Date)";
        $encodingInformationStatement->bindParam(':id', $lastRowFetch['id']);
        $encodingInformationStatement->bindParam(':Date_Encoded', $householdRecord->dateEncoded);
        $encodingInformationStatement->bindParam(':Name_and_Initial_of_Encoder', $householdRecord->nameAndInitialOfEncoder);
        $encodingInformationStatement->bindParam(':Name_of_Supervisor_Initial_and_Date', $householdRecord->nameOfSupervisorInitialAndDate);
        $encodingInformationStatement->execute();

        //  Inserts value to Household Questions A.
        
        $householdQuestionsAQuery = "INSERT INTO household_question_a
                                     VALUES(:id, :Q1_Surname, :Q1_Middle_Name, :Q1_First_Name, :Q2, :Q3, :Q4, :Date_of_Birth_Month, :Date_of_Birth_Year, 
                                            :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14, :Q15, :Q16, :Q17, :Q18, :Q19, :Q20)";
        $householdQuestionsAStatement->bindParam(':id', $lastRowFetch['id']);
        $householdQuestionsAStatement->bindParam(':Q1_Surname', $householdRecord->q1Surname);
        $householdQuestionsAStatement->bindParam(':Q1_Middle_Name', $householdRecord->q1MiddleName);
        $householdQuestionsAStatement->bindParam(':Q1_First_Name', $householdRecord->q1FirstName);
        $householdQuestionsAStatement->bindParam(':Q2', $householdRecord->q2);
        $householdQuestionsAStatement->bindParam(':Q3', $householdRecord->q3);
        $householdQuestionsAStatement->bindParam(':Q4', $householdRecord->q4);
        $householdQuestionsAStatement->bindParam(':Date_of_Birth_Month', $householdRecord->q5Month);
        $householdQuestionsAStatement->bindParam(':Date_of_Birth_Year', $householdRecord->q5Year);
        $householdQuestionsAStatement->bindParam(':Q6', $householdRecord->q6);
        $householdQuestionsAStatement->bindParam(':Q7', $householdRecord->q7);
        $householdQuestionsAStatement->bindParam(':Q8', $householdRecord->q8);
        $householdQuestionsAStatement->bindParam(':Q9', $householdRecord->q9);
        $householdQuestionsAStatement->bindParam(':Q10', $householdRecord->q10);
        $householdQuestionsAStatement->bindParam(':Q11', $householdRecord->q11);
        $householdQuestionsAStatement->bindParam(':Q12', $householdRecord->q12);
        $householdQuestionsAStatement->bindParam(':Q13', $householdRecord->q13);
        $householdQuestionsAStatement->bindParam(':Q14', $householdRecord->q14);
        $householdQuestionsAStatement->bindParam(':Q15', $householdRecord->q15);
        $householdQuestionsAStatement->bindParam(':Q16', $householdRecord->q16);
        $householdQuestionsAStatement->bindParam(':Q17', $householdRecord->q17);
        $householdQuestionsAStatement->bindParam(':Q18', $householdRecord->q18);
        $householdQuestionsAStatement->bindParam(':Q19', $householdRecord->q19);
        $householdQuestionsAStatement->bindParam(':Q20', $householdRecord->q20);
        $householdQuestionsAStatement->execute();

        break;
    }
?>