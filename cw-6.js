alert ("مرحبا بك في موقعي الي بيقولك اذا سقطت ولا لا") 
let grade = prompt("اكتب درجتك هنا")
console.log (grade)
if (grade >= 90 && grade <= 100)
{
console.log("%c لقد حصلت على امتياز ",'color: green')

} else if (grade >= 80 && grade <= 89)
{
    console.log("%c لقد حصلت على جيد جدا ",' color: yellow')

} 
else if (grade >= 70 && grade <= 79)
{
    console.log("%c لقد حصلت على جيد" ,' color: #bc3908')

}
else if (grade >= 60 && grade <= 69)
{
    console.log("%c لقد حصلت على مقبول ",' color: red')

} 
else if (grade >= 50 && grade <= 59)
{
    console.log("%c لقد حصلت على ضعيف " , "color : #941B0C")

} 
else if ( grade <= 50)
{
    console.log("%c الوالد بيدق عليك بعد شوي انحاااااااااااش" , "color : #621708")

} 
/* جافا سكريب مو جافا
supra on top
*/
