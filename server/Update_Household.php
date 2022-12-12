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
switch($method) {
  case "POST":
    $update_household = json_decode(file_get_contents('php://input'));
  
    $individualRecord = $update_household->Household_Value;
    $Household_Lists = $update_household->individuals;
    

    // Individual Record Table Update
    $individualRecordUpdate = "UPDATE household_record
                               SET NO = :NO, Name_of_Respondent = :Name_of_Respondent, Household = :Household, Institutional_Living_Quarter = :Institutional_Living_Quarter
                               WHERE id = :id";
    $individualRecordStmt = $conn->prepare($individualRecordUpdate);
    $individualRecordStmt->bindParam(":NO",$individualRecord->recordNumber);
    $individualRecordStmt->bindParam(":Household",$individualRecord->household);
    $individualRecordStmt->bindParam(":Institutional_Living_Quarter",$individualRecord->institutionalLivingQuarter);
    $individualRecordStmt->bindParam(":Name_of_Respondent",$individualRecord->nameOfRespondent);
    $individualRecordStmt->bindParam(":id",$individualRecord->id);    
    $individualRecordStmt->execute();

    //identification Update
    $identificationUpdate = "UPDATE household_identification
                             SET Province = :Province, City_Municipality= :City_Municipality, Barangay= :Barangay, Household_Head=:Household_Head, Address_A=:Address_A, Address_B=:Address_B, Address_C=:Address_C, Name_of_Respondent=:Name_of_Respondent
                             WHERE id = :id";
    $identificationStmt = $conn->prepare($identificationUpdate);
    $identificationStmt->bindParam(":Province",$individualRecord->recordNumber);
    $identificationStmt->bindParam(":City_Municipality",$individualRecord->household);
    $identificationStmt->bindParam(":Barangay",$individualRecord->barangay);
    $identificationStmt->bindParam(":Household_Head",$individualRecord->householdHead);
    $identificationStmt->bindParam(":Address_A",$individualRecord->addressRoom);
    $identificationStmt->bindParam(":Address_B",$individualRecord->addressHouse);
    $identificationStmt->bindParam(":Address_C",$individualRecord->addressStreet);
    $identificationStmt->bindParam(":Name_of_Respondent",$individualRecord->nameOfRespondent);
    $identificationStmt->bindParam(":id",$individualRecord->id);    
    $identificationStmt->execute();

    // interview_information Update
    $interview_informationUpdate = "UPDATE household_interview_information
                                   SET Visit= :Visit, Date_of_Visit= :Date_of_Visit, Time_Start= :Time_Start, Time_End=:Time_End, Result=:Result, Date_of_Next_Visit=:Date_of_Next_Visit, Name_of_Interviewer_Initial_Date=:Name_of_Interviewer_Initial_Date, Name_of_Supervisor_Initial_Date=:Name_of_Supervisor_Initial_Date
                                   WHERE id = :id";
    $interview_informationStmt= $conn->prepare($interview_informationUpdate);
    $interview_informationStmt->bindParam(":Visit",$individualRecord->visit);
    $interview_informationStmt->bindParam(":Date_of_Visit",$individualRecord->dateOfVisit);
    $interview_informationStmt->bindParam(":Time_Start",$individualRecord->timeStart);
    $interview_informationStmt->bindParam(":Time_End",$individualRecord->timeEnd);
    $interview_informationStmt->bindParam(":Result",$individualRecord->result);
    $interview_informationStmt->bindParam(":Date_of_Next_Visit",$individualRecord->dateOfNextVisit);
    $interview_informationStmt->bindParam(":Name_of_Interviewer_Initial_Date",$individualRecord->nameOfInterviewer);
    $interview_informationStmt->bindParam(":Name_of_Supervisor_Initial_Date",$individualRecord->nameOfSupervisor);  
    $interview_informationStmt->bindParam(":id",$individualRecord->id); 
    $interview_informationStmt->execute(); 

    // encoding Update
    $encoding_informationUpdate = "UPDATE household_encoding_information
                       SET Date_Encoded=:Date_Encoded, Name_and_Initial_of_Encoder=:Name_and_Initial_of_Encoder, Name_of_Supervisor_Initial_and_Date=:Name_of_Supervisor_Initial_and_Date
                       WHERE id = :id";
    $encoding_informationStmt= $conn->prepare($encoding_informationUpdate);
    $encoding_informationStmt->bindParam(":Date_Encoded",$individualRecord->dateEncoded);
    $encoding_informationStmt->bindParam(":Name_and_Initial_of_Encoder",$individualRecord->nameAndInitialOfEncoder);   
    $encoding_informationStmt->bindParam(":Name_of_Supervisor_Initial_and_Date",$individualRecord->nameOfSupervisorInitialAndDate);
    $encoding_informationStmt->bindParam(":id",$individualRecord->id);
    $encoding_informationStmt->execute();

    $size =  sizeof($Household_Lists);

    $get_number_of_rows = $conn->query("SELECT * FROM household_question_part_a");
    $list = $get_number_of_rows->fetchAll(); 
    
   
      for ($i = 0; $i < sizeof($list); $i++) {
        
        $temp = $list[$i];
        
        $same = false;

        for($j = 0; $j < $size; $j++) {
          $question = $Household_Lists[$j];
          if($temp['num'] === $question->num ) {
              $same = true;
              break;
            }
        }

        if($same === false) {
          $id = $temp['id'];
          $num = $temp['num'];

          $conn->query("DELETE FROM household_question_part_a WHERE id = $id AND num = '".$num."'");
          $conn->query("DELETE FROM household_question_part_b WHERE id = $id AND num = '".$num."'");
          $conn->query("DELETE FROM household_question_part_c WHERE id = $id AND num = '".$num."'");
          $conn->query("DELETE FROM household_question_part_d WHERE id = $id AND num = '".$num."'");
            

          $update_total_number_of_household_query = "UPDATE household_record
                                                     SET Total_Number_of_Household = :Total_Number_of_Household
                                                     WHERE id = :id";
          $update_total_number_of_household_stmt = $conn->prepare($update_total_number_of_household_query);
          $update_total_number_of_household_stmt->bindParam(':id',$temp['id']);
          $update_total_number_of_household_stmt->bindParam(':Total_Number_of_Household',$size);
          $update_total_number_of_household_stmt->execute();
          
        }
      }
    

    for($i = 0; $i < sizeof($Household_Lists); $i++) {
        $questions = $Household_Lists[$i];
        
        if(isset($questions->newRecord)) {

          $update_total_number_of_household_query = "UPDATE household_record
                                                     SET Total_Number_of_Household = :Total_Number_of_Household
                                                     WHERE id = :id";
          $update_total_number_of_household_stmt = $conn->prepare($update_total_number_of_household_query);
          $update_total_number_of_household_stmt->bindParam(':id',$questions->id);
          $update_total_number_of_household_stmt->bindParam(':Total_Number_of_Household',$size);
          $update_total_number_of_household_stmt->execute();

          //Insert value to Individual_question_part_a
          $Individual_question_part_a= "INSERT INTO household_question_part_a(id,num, Q1_Surname, Q1_Middle_Name, Q1_First_Name, Q2, Q3, Q4, Date_of_Birth_Month, Date_of_Birth_Year, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20)
                                        Values (:id,:num, :Q1_Surname, :Q1_Middle_Name, :Q1_First_Name, :Q2, :Q3, :Q4, :Date_of_Birth_Month, :Date_of_Birth_Year, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14, :Q15, :Q16, :Q17, :Q18, :Q19, :Q20)";
          $Individual_question_part_aStatement=$conn->prepare($Individual_question_part_a); 
          $Individual_question_part_aStatement->bindParam(':id', $questions->id);
          $Individual_question_part_aStatement->bindParam(':num', $questions->num);
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
          $Individual_question_part_b= "INSERT INTO household_question_part_b(id,num, Q21, Q22_A, Q22_B, Q23, Q24, Q25_A, Q25_B, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33_Barangay, Q33_Municipality, Q34_Barangay, Q34_Municipality, Q35_Year, Q35_Month, Q36, Q37_Month, Q37_Year)
                                        VALUES (:id,:num, :Q21, :Q22_A, :Q22_B, :Q23, :Q24, :Q25_A, :Q25_B, :Q26, :Q27,:Q28, :Q29, :Q30, :Q31, :Q32, :Q33_Barangay, :Q33_Municipality, :Q34_Barangay,:Q34_Municipality, :Q35_Year, :Q35_Month, :Q36, :Q37_Month, :Q37_Year)";
          $Individual_question_part_bStatement=$conn->prepare($Individual_question_part_b); 
          $Individual_question_part_bStatement->bindParam(':id', $questions->id);
          $Individual_question_part_bStatement->bindParam(':num', $questions->num);
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
          $Individual_question_part_c= "INSERT INTO  household_question_part_c(id,num, Q38_A, Q38_B, Q38_C, Q39_Month, Q39_Year, Q40_A, Q40_B, Q40C, Q41, Q42_A, Q42_B, 	Q43, Q44, Q45, Q46, Q47, Q48, Q49, Q50_A, Q50_B, Q51, Q52, Q53)
                                        VALUES (:id,:num, :Q38_A, :Q38_B, :Q38_C, :Q39_Month, :Q39_Year, :Q40_A, :Q40_B, :Q40C, :Q41, :Q42_A, :Q42_B, :Q43, :Q44, :Q45, :Q46, :Q47, :Q48, :Q49, :Q50_A, :Q50_B, :Q51, :Q52, :Q53)";
          $Individual_question_part_cStatement=$conn->prepare($Individual_question_part_c);
          $Individual_question_part_cStatement->bindParam(':id', $questions->id);
          $Individual_question_part_cStatement->bindParam(':num', $questions->num);
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
          $Individual_question_part_d= "INSERT INTO household_question_part_d(id,num, Q54_Age, Q54_Cause_of_Death, Q55_Age, Q55_Sex, Q55_Cause_of_Death, Q56_A, Q56_B, Q56_C, Q57_A, Q57_B, Q57_C, Q58_Barangay, Q58_Municipality, Q58_Province)
                                        VALUES(:id,:num, :Q54_Age, :Q54_Cause_of_Death, :Q55_Age, :Q55_Sex, :Q55_Cause_of_Death, :Q56_A, :Q56_B, :Q56_C, :Q57_A, :Q57_B, :Q57_C, :Q58_Barangay, :Q58_Municipality, :Q58_Province)";
          $Individual_question_part_dStatement=$conn->prepare($Individual_question_part_d);
          $Individual_question_part_dStatement->bindParam(':id', $questions->id);
          $Individual_question_part_dStatement->bindParam(':num', $questions->num);
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
        }

        //individual_questionpart_a Update
        $individual_question_part_aUpdate = "UPDATE household_question_part_a
                                            SET Q1_Surname=:Q1_Surname, Q1_Middle_Name=:Q1_Middle_Name, Q1_First_Name=:Q1_First_Name, Q2=:Q2, Q3=:Q3, Q4=:Q4, Date_of_Birth_Month=:Date_of_Birth_Month, Date_of_Birth_Year=:Date_of_Birth_Year, Q6=:Q6, Q7=:Q7, Q8=:Q8, Q9=:Q9, Q10=:Q10, Q11=:Q11, Q12=:Q12, Q13=:Q13, Q14=:Q14, Q15=:Q15, Q16=:Q16, Q17=:Q17, Q18=:Q18, Q19=:Q19, Q20=:Q20     
                                            WHERE id = :id AND num = :num";
        $individual_question_part_aStmt= $conn->prepare($individual_question_part_aUpdate);
        $individual_question_part_aStmt->bindParam(":Q1_Surname",$questions->q1Surname);
        $individual_question_part_aStmt->bindParam(":Q1_Middle_Name",$questions->q1FirstName);   
        $individual_question_part_aStmt->bindParam(":Q1_First_Name",$questions->q1MiddleName);   
        $individual_question_part_aStmt->bindParam(":Q2",$questions->q2);   
        $individual_question_part_aStmt->bindParam(":Q3",$questions->q3);   
        $individual_question_part_aStmt->bindParam(":Q4",$questions->q4);   
        $individual_question_part_aStmt->bindParam(":Date_of_Birth_Month",$questions->q5Month);   
        $individual_question_part_aStmt->bindParam(":Date_of_Birth_Year",$questions->q5Year);   
        $individual_question_part_aStmt->bindParam(":Q6",$questions->q6);   
        $individual_question_part_aStmt->bindParam(":Q7",$questions->q7);   
        $individual_question_part_aStmt->bindParam(":Q8",$questions->q8);   
        $individual_question_part_aStmt->bindParam(":Q9",$questions->q9);   
        $individual_question_part_aStmt->bindParam(":Q10",$questions->q10);   
        $individual_question_part_aStmt->bindParam(":Q11",$questions->q11);   
        $individual_question_part_aStmt->bindParam(":Q12",$questions->q12);   
        $individual_question_part_aStmt->bindParam(":Q13",$questions->q13);   
        $individual_question_part_aStmt->bindParam(":Q14",$questions->q14);   
        $individual_question_part_aStmt->bindParam(":Q15",$questions->q15);   
        $individual_question_part_aStmt->bindParam(":Q16",$questions->q16);   
        $individual_question_part_aStmt->bindParam(":Q17",$questions->q17);   
        $individual_question_part_aStmt->bindParam(":Q18",$questions->q18);   
        $individual_question_part_aStmt->bindParam(":Q19",$questions->q19);   
        $individual_question_part_aStmt->bindParam(":Q20",$questions->q20);   
        $individual_question_part_aStmt->bindParam(":id",$individualRecord->id);
        $individual_question_part_aStmt->bindParam(":num",$questions->num);
        $individual_question_part_aStmt->execute();  
        
        // individual_question_part_b Update
        $individual_question_part_bUpdate = "UPDATE household_question_part_b
                                            SET Q21=:Q21, Q22_A=:Q22_A, Q22_B=:Q22_B, Q23=:Q23, Q24=:Q24, Q25_A=:Q25_A, Q25_B=:Q25_B, Q26=:Q26, Q27=:Q27, Q28=:Q28, Q29=:Q29, Q30=:Q30, Q31=:Q31, Q32=:Q32, Q33_Barangay=:Q33_Barangay, Q33_Municipality=:Q33_Municipality, Q34_Barangay=:Q34_Barangay, Q34_Municipality=:Q34_Municipality, Q35_Year=:Q35_Year, Q35_Month=:Q35_Month, Q36=:Q36, Q37_Month=:Q37_Month, Q37_Year=:Q37_Year 
                                            WHERE id = :id AND num = :num";
        $individual_question_part_bStmt= $conn->prepare($individual_question_part_bUpdate);                                    
        $individual_question_part_bStmt->bindParam(":Q21",$questions->q21);
        $individual_question_part_bStmt->bindParam(":Q22_A",$questions->q22A);
        $individual_question_part_bStmt->bindParam(":Q22_B",$questions->q22B);
        $individual_question_part_bStmt->bindParam(":Q23",$questions->q23);
        $individual_question_part_bStmt->bindParam(":Q24",$questions-> q24);
        $individual_question_part_bStmt->bindParam(":Q25_A",$questions->q25A);
        $individual_question_part_bStmt->bindParam(":Q25_B",$questions->q25B);
        $individual_question_part_bStmt->bindParam(":Q26",$questions->q26);
        $individual_question_part_bStmt->bindParam(":Q27",$questions->q27);
        $individual_question_part_bStmt->bindParam(":Q28",$questions->q28);
        $individual_question_part_bStmt->bindParam(":Q29",$questions->q29);
        $individual_question_part_bStmt->bindParam(":Q30",$questions->q30);
        $individual_question_part_bStmt->bindParam(":Q31",$questions->q31);
        $individual_question_part_bStmt->bindParam(":Q32",$questions->q32);
        $individual_question_part_bStmt->bindParam(":Q33_Barangay",$questions->q33A);
        $individual_question_part_bStmt->bindParam(":Q33_Municipality",$questions->q33B);
        $individual_question_part_bStmt->bindParam(":Q34_Barangay",$questions->q34A);
        $individual_question_part_bStmt->bindParam(":Q34_Municipality",$questions->q34B);
        $individual_question_part_bStmt->bindParam(":Q35_Year",$questions->q35A);
        $individual_question_part_bStmt->bindParam(":Q35_Month",$questions->q35B);
        $individual_question_part_bStmt->bindParam(":Q36",$questions->q36);
        $individual_question_part_bStmt->bindParam(":Q37_Month",$questions->q37A);
        $individual_question_part_bStmt->bindParam(":Q37_Year",$questions->q37B);
        $individual_question_part_bStmt->bindParam(":id",$individualRecord->id);
        $individual_question_part_bStmt->bindParam(":num",$questions->num);
        $individual_question_part_bStmt->execute();
        
        // individual_questionpart_c Update
        $individual_question_part_cUpdate = "UPDATE household_question_part_c
                                            SET Q38_A=:Q38_A, Q38_B=:Q38_B, Q38_C=:Q38_C, Q39_Month=:Q39_Month, Q39_Year=:Q39_Year, Q40_A=:Q40_A, Q40_B=:Q40_B, Q40C=:Q40C, Q41=:Q41, Q42_A=:Q42_A, Q42_B=:Q42_B, Q43=:Q43, Q44=:Q44, Q45=:Q45, Q46=:Q46, Q47=:Q47, Q48=:Q48, Q49=:Q49, Q50_A=:Q50_A, Q50_B=:Q50_B, Q51=:Q51, Q52=:Q52, Q53=:Q53 
                                            WHERE id = :id AND num = :num";
        $individual_question_part_cStmt= $conn->prepare($individual_question_part_cUpdate);                                    
        $individual_question_part_cStmt->bindParam(":Q38_A",$questions->q38A);
        $individual_question_part_cStmt->bindParam(":Q38_B",$questions->q38B);
        $individual_question_part_cStmt->bindParam(":Q38_C",$questions->q38C);
        $individual_question_part_cStmt->bindParam(":Q39_Month",$questions->q39A);
        $individual_question_part_cStmt->bindParam(":Q39_Year",$questions->q39B);
        $individual_question_part_cStmt->bindParam(":Q40_A",$questions->q40A);
        $individual_question_part_cStmt->bindParam(":Q40_B",$questions->q40B);
        $individual_question_part_cStmt->bindParam(":Q40C",$questions->q40C);
        $individual_question_part_cStmt->bindParam(":Q41",$questions->q41);
        $individual_question_part_cStmt->bindParam(":Q42_A",$questions->q42A);
        $individual_question_part_cStmt->bindParam(":Q42_B",$questions->q42B);
        $individual_question_part_cStmt->bindParam(":Q43",$questions->q43);
        $individual_question_part_cStmt->bindParam(":Q44",$questions->q44);
        $individual_question_part_cStmt->bindParam(":Q45",$questions->q45);
        $individual_question_part_cStmt->bindParam(":Q46",$questions->q46);
        $individual_question_part_cStmt->bindParam(":Q47",$questions->q47);
        $individual_question_part_cStmt->bindParam(":Q48",$questions->q48);
        $individual_question_part_cStmt->bindParam(":Q49",$questions->q49);
        $individual_question_part_cStmt->bindParam(":Q50_A",$questions->q50A);
        $individual_question_part_cStmt->bindParam(":Q50_B",$questions->q50B);
        $individual_question_part_cStmt->bindParam(":Q51",$questions->q51);
        $individual_question_part_cStmt->bindParam(":Q52",$questions->q52);
        $individual_question_part_cStmt->bindParam(":Q53",$questions->q53);
        $individual_question_part_cStmt->bindParam(":id",$individualRecord->id);
        $individual_question_part_cStmt->bindParam(":num",$questions->num);
        $individual_question_part_cStmt->execute();  
        
        // individual_questionpart_d Update
        $individual_question_part_dUpdate = "UPDATE household_question_part_d
                                            SET Q54_Age=:Q54_Age, Q54_Cause_of_Death=:Q54_Cause_of_Death, Q55_Age=:Q55_Age, Q55_Sex=:Q55_Sex, Q55_Cause_of_Death=:Q55_Cause_of_Death, Q56_A=:Q56_A, Q56_B=:Q56_B, Q56_C=:Q56_C, Q57_A=:Q57_A, Q57_B=:Q57_B, Q57_C=:Q57_C, Q58_Barangay=:Q58_Barangay, Q58_Municipality=:Q58_Municipality, Q58_Province=:Q58_Province  
                                            WHERE id = :id AND num = :num";
        $individual_question_part_dStmt= $conn->prepare($individual_question_part_dUpdate);                                    
        $individual_question_part_dStmt->bindParam(":Q54_Age",$questions->q54Age);
        $individual_question_part_dStmt->bindParam(":Q54_Cause_of_Death",$questions->q54CauseOfDeath);
        $individual_question_part_dStmt->bindParam(":Q55_Age",$questions->q55Age);
        $individual_question_part_dStmt->bindParam(":Q55_Sex",$questions->q55Sex);
        $individual_question_part_dStmt->bindParam(":Q55_Cause_of_Death",$questions->q55CauseOfDeath);
        $individual_question_part_dStmt->bindParam(":Q56_A",$questions->q56A);
        $individual_question_part_dStmt->bindParam(":Q56_B",$questions->q56B);
        $individual_question_part_dStmt->bindParam(":Q56_C",$questions->q56C);
        $individual_question_part_dStmt->bindParam(":Q57_A",$questions->q57A);
        $individual_question_part_dStmt->bindParam(":Q57_B",$questions->q57B);
        $individual_question_part_dStmt->bindParam(":Q57_C",$questions->q57C);
        $individual_question_part_dStmt->bindParam(":Q58_Barangay",$questions->q58Barangay);
        $individual_question_part_dStmt->bindParam("Q58_Municipality",$questions->q58Municipality);
        $individual_question_part_dStmt->bindParam(":Q58_Province",$questions->q58Province);
        $individual_question_part_dStmt->bindParam(":id",$individualRecord->id);
        $individual_question_part_dStmt->bindParam(":num",$questions->num);
        $individual_question_part_dStmt->execute();  
    }
}
?>