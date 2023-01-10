## The total number of months included in the datasheet 
-Because every array in the finances virable represent a month. it best to use the .length property to deisplay the total amount of months.


## The net total amount of Profit/Losses over the entire period.
-The approach is to calculate the total sum for each year using the for loop and the addition properties 
- create a net total variable that will be set at zero then later used to display the total value. 
   - use the for loop to caculate the financial value for each month by creating a var [i] that start with the array index 0. from there use i++ to add every months finance 
  
  ## The average of the changes in Profit/Losses over the entire period.
  - I will need to find the changes from month to month . from there i will have the total, which will then be divided by the amount of month tp get the average. 
  - For this a diffrences array will be created. It will hold the change value for each month, the total of this array is what then will be use to divide by the amount of months to get the average. 

##  The greatest increase in profits (date and amount) over the entire period.  The greatest decrease in losses (date and amount) over the entire period.
- The  step is to use the for loop to go through the new differnces array, which will compare each result and picked out the highest. wThis will be the greates profit. 
- and else if statement will be use to find the reverse,
.

