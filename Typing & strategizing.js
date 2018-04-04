//assign players MBTI types
var yourMBTI, Sirius_MBTI

MBTIs = ['ESTJ', 'INFP', 'ISTJ', 'ENFP', 'INTJ', 'ESFP', 'ISFJ', 'ESTP',
'ISFP', 'INTP', 'INFJ', 'ENFJ', 'ENTJ', 'ENTP', 'ISTP', 'ESFJ']
yourMBTI = Math.floor(Math.random() * MBTIs.length)
Sirius_MBTI = Math.floor(Math.random() * MBTIs.length)
document.write("Your type is " + MBTIs[yourMBTI])
document.write("<br>")
document.write("Sirius' type is " + MBTIs[Sirius_MBTI])
document.write("<br>")
document.write("<br>")
	
//assign players strategies based on their types
var yourStrat, Sirius_Strat
F_Strats = ['Tit for Tat', 'Naive Peacemaker', 'Remorseful Prober', 'Always Cooperate', 'Random']
T_Strats = ['Tit for Tat', 'Tit for Two Tats', 'Naive Prober', 'Always Defect', 'Random']

if (MBTIs[yourMBTI].includes('T') == true) {
	yourStrat = Math.floor(Math.random() * T_Strats.length)
    document.write("Your strategy is " + T_Strats[yourStrat])
    document.write("<br>")
}
else {
    yourStrat = Math.floor(Math.random() * F_Strats.length)
    document.write("Your strategy is " + F_Strats[yourStrat])
    document.write("<br>")
}

if (MBTIs[Sirius_MBTI].includes('T') == true) {
    Sirius_Strat = Math.floor(Math.random() * T_Strats.length)
    document.write("Sirius' strategy is " + T_Strats[Sirius_Strat])
}
else {
    Sirius_Strat = Math.floor(Math.random() * F_Strats.length)
    document.write("Sirius' strategy is " + F_Strats[Sirius_Strat])
}