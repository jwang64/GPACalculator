function calculateGPA()
{
	alert("Form has been submitted");
	console.log("HI");
	var Grades = document.getElementsByName("Grade");
	var gradeSum = 0;
	var CreditHours = document.getElementsByName("CreditHour");
	var creditHourSum = 0;
	var currentOverallGPA = document.getElementsByName("OverallGPA");
	var currentCreditHours = document.getElementsByName("CreditHours");

	
	for (i = 0; i < Grades.length; i++)
	{
		if(Grades[i].value == "")
		{
				gradeSum += 0;
		}

		else
		{
			gradeSum += (convertGradeToNumber(Grades[i].value) * CreditHours[i].value);
		}
		console.log("The Grades[i].value is " + Grades[i].value);
		console.log(gradeSum);
	}
	console.log("The gradeSum is " + gradeSum);
	
	
	
	for (i = 0; i < CreditHours.length; i++)
	{
		if(CreditHours[i].value == "")
		{
			creditHourSum += 0;
		}
		else
		{
			creditHourSum += parseFloat(CreditHours[i].value);
		}
		console.log("The CreditHours[i].value is " + CreditHours[i].value);
		console.log("The creditHourSum is " + creditHourSum);
	}
	
	//alert("The creditHourSum is" + creditHourSum);
	
	//alert(SemesterGPA);
	
	
	var actualCurrentOverallGPA = parseFloat(currentOverallGPA[0].value);
	var actualCurrentCreditHours = parseFloat(currentCreditHours[0].value);

	console.log("The currentOverallGPA is " + actualCurrentOverallGPA);
	console.log("The currentCreditHours is" + actualCurrentCreditHours);
	console.log("The gradeSum is " + gradeSum);
	console.log("The creditHourSum is " + creditHourSum);
	
	
	var newGPA = (actualCurrentOverallGPA * actualCurrentCreditHours + gradeSum) / (creditHourSum + actualCurrentCreditHours);
	var SemesterGPA = gradeSum / creditHourSum;
	alert("Your Semester GPA is " + SemesterGPA
		   + "\n Your new Overall GPA is " + newGPA);
	console.log(SemesterGPA);
	console.log(newGPA);

}

function convertGradeToNumber(number)
{
	//As
	if(number == 'A+')
	{
		return 4.3;
	}
	
	if(number == 'A')
	{
		return 4;
	}
	
	if(number == 'A-')
	{
		return 3.7;
	}
	
	//Bs
	if(number == 'B+')
	{
		return 3.3;
	}
	
	if(number == 'B')
	{
		return 3;
	}
	
	if(number == 'B-')
	{
		return 2.7;
	}
	
	//Cs
	if(number == 'C+')
	{
		return 2.3;
	}
	if(number == 'C')
	{
		return 2;
	}
	if(number == 'C-')
	{
		return 1.7;
	}
	
	//Ds
	if(number == 'D+')
	{
		return 1.3;
	}
	if(number == 'D')
	{
		return 1;
	}
	if(number == 'D-')
	{
		return .7;
	}
	
	//F
	if(number == 'F')
	{
		return 0;
	}
	
	
}