// 120 characters
!function(){var i=1,r;while(i<100)r=i,console.log(r+=!(i%15)?': fizzbuzz!':!(i%5)?': buzz!':!(i%3)?': fizz!':''),i++;}()

// 115 characters
!function(){var i=1,r,a='fizz',b='buzz';while(i<100)r=i,console.log([r,!(i%15)?a+b:!(i%5)?b:!(i%3)?a:'']+''),++i}()

// 113 characters
!function(a,b,i,r){while(i<100)r=d=e=i,d%=5,e%=3,console.log([r,!d&!e?a+b:!d?b:!e?a:'']+''),++i}('fizz','buzz',1)

// The Google Closure Compiler (adv. mode) did this in 109 characters,
// but I think it's an illegitimate solution, as it's just a code fragment, not a standalone function.
for(var a=1,b;100>a;)b=d=e=a,d%=5,e%=3,console.log([b,!d&!e?'fizzbuzz':!d?'buzz':!e?'fizz':'']+''),++a
