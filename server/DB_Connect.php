<?php
	/**
	* Database Connection
	*/
	class DbConnect {
		private $server = 'localhost';
		private $dbname = 'rbimdb';
		private $user = 'root';
		private $pass = '';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
				return $conn;
			} catch (\Exception $e) {
				echo "error";
				$conn = new PDO('mysql:host=' .$this->server .';', $this->user, $this->pass);
				$createDatabaseQuery = "CREATE DATABASE rbimdb";
				$stmt = $conn->prepare($createDatabaseQuery);
				if($stmt->execute()){
					$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
					$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
					$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
					
					// Individual Record
					$individualRecordQuery = "CREATE TABLE individual_record(
  											  id int AUTO_INCREMENT NOT NULL,
  											  Name_of_Respondent varchar(50) NOT NULL,
											  Total_Number_of_Household varchar(50) NOT NULL,
  											  NO varchar(50) NOT NULL,
  											  Household varchar(50) NOT NULL,
  											  Institutional_Living_Quarter varchar(50) NOT NULL,
											  PRIMARY KEY(id))";
					
					$encodingInformationQuery = "CREATE TABLE encoding_information(
  												id int NOT NULL,
  												Date_Encoded varchar(50) NOT NULL,
  												Name_and_Initial_of_Encoder varchar(50) NOT NULL,
  												Name_of_Supervisor_Initial_and_Date varchar(50) NOT NULL,
												FOREIGN KEY (id) REFERENCES individual_record(id)
												ON DELETE CASCADE)";
					
					$identificationQuery = "CREATE TABLE identification(
  											id int NOT NULL,
  											Province varchar(50) NOT NULL,
 											City_Municipality varchar(50) NOT NULL,
  											Barangay varchar(50) NOT NULL,
  											Household_Head varchar(50) NOT NULL,
  											Address_A varchar(50) NOT NULL,
  											Address_B varchar(50) NOT NULL,
  											Address_C varchar(50) NOT NULL,
  											Name_of_Respondent varchar(50) NOT NULL,
											FOREIGN KEY (id) REFERENCES individual_record(id)
											ON DELETE CASCADE)";

					$individualQuestionPartAQuery = "CREATE TABLE individual_question_part_a (
  													id int NOT NULL,
  													Q1_Surname varchar(50) NOT NULL,
 													Q1_Middle_Name varchar(50) NOT NULL,
  													Q1_First_Name varchar(50) NOT NULL,
  													Q2 varchar(50) NOT NULL,
  													Q3 varchar(50) NOT NULL,
  													Q4 varchar(50) NOT NULL,
  													Date_of_Birth_Month varchar(50) NOT NULL,
  													Date_of_Birth_Year varchar(50) NOT NULL,
  													Q6 varchar(50) NOT NULL,
  													Q7 varchar(50) NOT NULL,
  													Q8 varchar(50) NOT NULL,
  													Q9 varchar(50) NOT NULL,
  													Q10 varchar(50) NOT NULL,
  													Q11 varchar(50) NOT NULL,
  													Q12 varchar(50) NOT NULL,
  													Q13 varchar(50) NOT NULL,
  													Q14 varchar(50) NOT NULL,
  													Q15 varchar(50) NOT NULL,
  													Q16 varchar(50) NOT NULL,
  													Q17 varchar(50) NOT NULL,
  													Q18 varchar(50) NOT NULL,
  													Q19 varchar(50) NOT NULL,
  													Q20 varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES individual_record(id)
													ON DELETE CASCADE)";

					$individualQuestionPartBQuery = "CREATE TABLE individual_question_part_b (
  													id int NOT NULL,
  													Q21 varchar(50) NOT NULL,
  													Q22_A varchar(50) NOT NULL,
  													Q22_B varchar(50) NOT NULL,
  													Q23 varchar(50) NOT NULL,
  													Q24 varchar(50) NOT NULL,
  													Q25_A varchar(50) NOT NULL,
  													Q25_B varchar(50) NOT NULL,
  													Q26 varchar(50) NOT NULL,
  													Q27 varchar(50) NOT NULL,
  													Q28 varchar(50) NOT NULL,
  													Q29 varchar(50) NOT NULL,
  													Q30 varchar(50) NOT NULL,
 													Q31 varchar(50) NOT NULL,
													Q32 varchar(50) NOT NULL,
													Q33_Barangay varchar(50) NOT NULL,
													Q33_Municipality varchar(50) NOT NULL,
													Q34_Barangay varchar(50) NOT NULL,
													Q34_Municipality varchar(50) NOT NULL,
													Q35_Year varchar(50) NOT NULL,
													Q35_Month varchar(50) NOT NULL,
													Q36 varchar(50) NOT NULL,
													Q37_Month varchar(50) NOT NULL,
													Q37_Year varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES individual_record(id)
													ON DELETE CASCADE
													)";

					$individualQuestionPartCQuery = "CREATE TABLE individual_question_part_c(
													id int NOT NULL,
													Q38_A varchar(50) NOT NULL,
													Q38_B varchar(50) NOT NULL,
													Q38_C varchar(50) NOT NULL,
													Q39_Month varchar(50) NOT NULL,
													Q39_Year varchar(50) NOT NULL,
													Q40_A varchar(50) NOT NULL,
													Q40_B varchar(50) NOT NULL,
													Q40C varchar(50) NOT NULL,
													Q41 varchar(50) NOT NULL,
													Q42_A varchar(50) NOT NULL,
													Q42_B varchar(50) NOT NULL,
													Q43 varchar(50) NOT NULL,
													Q44 varchar(50) NOT NULL,
													Q45 varchar(50) NOT NULL,
													Q46 varchar(50) NOT NULL,
													Q47 varchar(50) NOT NULL,
													Q48 varchar(50) NOT NULL,
													Q49 varchar(50) NOT NULL,
													Q50_A varchar(50) NOT NULL,
													Q50_B varchar(50) NOT NULL,
													Q51 varchar(50) NOT NULL,
													Q52 varchar(50) NOT NULL,
													Q53 varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES individual_record(id)
													ON DELETE CASCADE
													)";

					$individualQuestionPartDQuery = "CREATE TABLE individual_question_part_d(
													id int NOT NULL,
													Q54_Age varchar(50) NOT NULL,
													Q54_Cause_of_Death varchar(50) NOT NULL,
													Q55_Age varchar(50) NOT NULL,
													Q55_Sex varchar(50) NOT NULL,
													Q55_Cause_of_Death varchar(50) NOT NULL,
													Q56_A varchar(50) NOT NULL,
													Q56_B varchar(50) NOT NULL,
													Q56_C varchar(50) NOT NULL,
													Q57_A varchar(50) NOT NULL,
													Q57_B varchar(50) NOT NULL,
													Q57_C varchar(50) NOT NULL,
													Q58_Barangay varchar(50) NOT NULL,
													Q58_Municipality varchar(50) NOT NULL,
													Q58_Province varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES individual_record(id)
													ON DELETE CASCADE
													)";

					$individualRecordImagesQuery = "CREATE TABLE individual_record_images (
													id int(11) NOT NULL,
													Photo varchar(100) NOT NULL,
													Signature varchar(100) NOT NULL,
													Left_Thumb_Mark varchar(100) NOT NULL,
													Right_Thumb_Mark varchar(100) NOT NULL,
													FOREIGN KEY (id) REFERENCES individual_record(id)
													ON DELETE CASCADE
													)";

					$interviewInformationQuery = "CREATE TABLE interview_information (
												id int NOT NULL,
												Visit varchar(50) NOT NULL,
												Date_of_Visit varchar(50) NOT NULL,
												Time_Start varchar(50) NOT NULL,
												Time_End varchar(50) NOT NULL,
												Result varchar(50) NOT NULL,
												Date_of_Next_Visit varchar(50) NOT NULL,
												Name_of_Interviewer_Initial_Date varchar(50) NOT NULL,
												Name_of_Supervisor_Initial_Date varchar(50) NOT NULL,
												FOREIGN KEY (id) REFERENCES individual_record(id)
												ON DELETE CASCADE
												)";

					$userInfoQuery = "CREATE TABLE users_info (
										id int AUTO_INCREMENT NOT NULL,
										username varchar(100) NOT NULL,
										password varchar(100) NOT NULL,
										access_lvl varchar(100) NOT NULL,
										PRIMARY KEY(id)
										)";
					
					$individualRecordStatement = $conn->prepare($individualRecordQuery);
					$encodingInformationStatement = $conn->prepare($encodingInformationQuery);
					$identificationStatement = $conn->prepare($identificationQuery);
					$interviewInformationStatement = $conn->prepare($interviewInformationQuery);
					$individualRecordImagesStatement = $conn->prepare($individualRecordImagesQuery);
					$individualQuestionPartAStatement = $conn->prepare($individualQuestionPartAQuery);
					$individualQuestionPartBStatement = $conn->prepare($individualQuestionPartBQuery);
					$individualQuestionPartCStatement = $conn->prepare($individualQuestionPartCQuery);
					$individualQuestionPartDStatement = $conn->prepare($individualQuestionPartDQuery);
					$userInfoStatement = $conn->prepare($userInfoQuery);

					$individualRecordStatement->execute();
					$encodingInformationStatement->execute();
					$identificationStatement->execute();
					$interviewInformationStatement->execute();
					$individualRecordImagesStatement->execute();
					$individualQuestionPartAStatement->execute();
					$individualQuestionPartBStatement->execute();
					$individualQuestionPartCStatement->execute();
					$individualQuestionPartDStatement->execute();
					$userInfoStatement->execute();

					// Household Record
					$householdRecordQuery = "CREATE TABLE household_record(
  											  id int AUTO_INCREMENT NOT NULL,
  											  Name_of_Respondent varchar(50) NOT NULL,
											  Total_Number_of_Household varchar(50) NOT NULL,
  											  NO varchar(50) NOT NULL,
  											  Household varchar(50) NOT NULL,
  											  Institutional_Living_Quarter varchar(50) NOT NULL,
											  PRIMARY KEY(id))";
					
					$encodingInformationQuery = "CREATE TABLE household_encoding_information(
  												id int NOT NULL,
  												Date_Encoded varchar(50) NOT NULL,
  												Name_and_Initial_of_Encoder varchar(50) NOT NULL,
  												Name_of_Supervisor_Initial_and_Date varchar(50) NOT NULL,
												FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE)";
					
					$identificationQuery = "CREATE TABLE household_identification(
  											id int NOT NULL,
  											Province varchar(50) NOT NULL,
 											City_Municipality varchar(50) NOT NULL,
  											Barangay varchar(50) NOT NULL,
  											Household_Head varchar(50) NOT NULL,
  											Address_A varchar(50) NOT NULL,
  											Address_B varchar(50) NOT NULL,
  											Address_C varchar(50) NOT NULL,
  											Name_of_Respondent varchar(50) NOT NULL,
											FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE)";

					$householdQuestionPartAQuery = "CREATE TABLE household_question_part_a (
  													id int NOT NULL,
  													Q1_Surname varchar(50) NOT NULL,
 													Q1_Middle_Name varchar(50) NOT NULL,
  													Q1_First_Name varchar(50) NOT NULL,
  													Q2 varchar(50) NOT NULL,
  													Q3 varchar(50) NOT NULL,
  													Q4 varchar(50) NOT NULL,
  													Date_of_Birth_Month varchar(50) NOT NULL,
  													Date_of_Birth_Year varchar(50) NOT NULL,
  													Q6 varchar(50) NOT NULL,
  													Q7 varchar(50) NOT NULL,
  													Q8 varchar(50) NOT NULL,
  													Q9 varchar(50) NOT NULL,
  													Q10 varchar(50) NOT NULL,
  													Q11 varchar(50) NOT NULL,
  													Q12 varchar(50) NOT NULL,
  													Q13 varchar(50) NOT NULL,
  													Q14 varchar(50) NOT NULL,
  													Q15 varchar(50) NOT NULL,
  													Q16 varchar(50) NOT NULL,
  													Q17 varchar(50) NOT NULL,
  													Q18 varchar(50) NOT NULL,
  													Q19 varchar(50) NOT NULL,
  													Q20 varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE)";

					$householdQuestionPartBQuery = "CREATE TABLE household_question_part_b (
  													id int NOT NULL,
  													Q21 varchar(50) NOT NULL,
  													Q22_A varchar(50) NOT NULL,
  													Q22_B varchar(50) NOT NULL,
  													Q23 varchar(50) NOT NULL,
  													Q24 varchar(50) NOT NULL,
  													Q25_A varchar(50) NOT NULL,
  													Q25_B varchar(50) NOT NULL,
  													Q26 varchar(50) NOT NULL,
  													Q27 varchar(50) NOT NULL,
  													Q28 varchar(50) NOT NULL,
  													Q29 varchar(50) NOT NULL,
  													Q30 varchar(50) NOT NULL,
 													Q31 varchar(50) NOT NULL,
													Q32 varchar(50) NOT NULL,
													Q33_Barangay varchar(50) NOT NULL,
													Q33_Municipality varchar(50) NOT NULL,
													Q34_Barangay varchar(50) NOT NULL,
													Q34_Municipality varchar(50) NOT NULL,
													Q35_Year varchar(50) NOT NULL,
													Q35_Month varchar(50) NOT NULL,
													Q36 varchar(50) NOT NULL,
													Q37_Month varchar(50) NOT NULL,
													Q37_Year varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE
													)";

					$householdQuestionPartCQuery = "CREATE TABLE household_question_part_c(
													id int NOT NULL,
													Q38_A varchar(50) NOT NULL,
													Q38_B varchar(50) NOT NULL,
													Q38_C varchar(50) NOT NULL,
													Q39_Month varchar(50) NOT NULL,
													Q39_Year varchar(50) NOT NULL,
													Q40_A varchar(50) NOT NULL,
													Q40_B varchar(50) NOT NULL,
													Q40C varchar(50) NOT NULL,
													Q41 varchar(50) NOT NULL,
													Q42_A varchar(50) NOT NULL,
													Q42_B varchar(50) NOT NULL,
													Q43 varchar(50) NOT NULL,
													Q44 varchar(50) NOT NULL,
													Q45 varchar(50) NOT NULL,
													Q46 varchar(50) NOT NULL,
													Q47 varchar(50) NOT NULL,
													Q48 varchar(50) NOT NULL,
													Q49 varchar(50) NOT NULL,
													Q50_A varchar(50) NOT NULL,
													Q50_B varchar(50) NOT NULL,
													Q51 varchar(50) NOT NULL,
													Q52 varchar(50) NOT NULL,
													Q53 varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE
													)";

					$householdQuestionPartDQuery = "CREATE TABLE household_question_part_d(
													id int NOT NULL,
													Q54_Age varchar(50) NOT NULL,
													Q54_Cause_of_Death varchar(50) NOT NULL,
													Q55_Age varchar(50) NOT NULL,
													Q55_Cause_of_Death varchar(50) NOT NULL,
													Q55_Sex varchar(50) NOT NULL,
													Q56_A varchar(50) NOT NULL,
													Q56_B varchar(50) NOT NULL,
													Q56_C varchar(50) NOT NULL,
													Q57_A varchar(50) NOT NULL,
													Q57_B varchar(50) NOT NULL,
													Q57_C varchar(50) NOT NULL,
													Q58_Barangay varchar(50) NOT NULL,
													Q58_Municipality varchar(50) NOT NULL,
													Q58_Province varchar(50) NOT NULL,
													FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE
													)";


					$interviewInformationQuery = "CREATE TABLE household_interview_information (
												id int NOT NULL,
												Visit varchar(50) NOT NULL,
												Date_of_Visit varchar(50) NOT NULL,
												Time_Start varchar(50) NOT NULL,
												Time_End varchar(50) NOT NULL,
												Result varchar(50) NOT NULL,
												Date_of_Next_Visit varchar(50) NOT NULL,
												Name_of_Interviewer_Initial_Date varchar(50) NOT NULL,
												Name_of_Supervisor_Initial_Date varchar(50) NOT NULL,
												FOREIGN KEY (id) REFERENCES household_record(id) ON DELETE CASCADE
												)";

					
					$individualRecordStatement = $conn->prepare($householdRecordQuery);
					$encodingInformationStatement = $conn->prepare($encodingInformationQuery);
					$identificationStatement = $conn->prepare($identificationQuery);
					$interviewInformationStatement = $conn->prepare($interviewInformationQuery);
					$individualQuestionPartAStatement = $conn->prepare($householdQuestionPartAQuery);
					$individualQuestionPartBStatement = $conn->prepare($householdQuestionPartBQuery);
					$individualQuestionPartCStatement = $conn->prepare($householdQuestionPartCQuery);
					$individualQuestionPartDStatement = $conn->prepare($householdQuestionPartDQuery);
				

					$individualRecordStatement->execute();
					$encodingInformationStatement->execute();
					$identificationStatement->execute();
					$interviewInformationStatement->execute();
					$individualQuestionPartAStatement->execute();
					$individualQuestionPartBStatement->execute();
					$individualQuestionPartCStatement->execute();
					$individualQuestionPartDStatement->execute();
					
					$passHash = password_hash('admin', PASSWORD_DEFAULT);
					$createAdminQuery = "INSERT INTO users_info(username,password,access_lvl) VALUES('admin',:password,'admin')";
					$createAdminStatement = $conn->prepare($createAdminQuery);
					$createAdminStatement->bindParam(':password', $passHash);
					$createAdminStatement->execute();
				} 
			}
		}
	}
?>