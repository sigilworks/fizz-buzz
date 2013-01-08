// 120 characters
!function(){var i=1,r;while(i<100)r=i,console.log(r+=!(i%15)?': fizzbuzz!':!(i%5)?': buzz!':!(i%3)?': fizz!':''),i++;}()

// 115 characters
!function(){var i=1,r,a='fizz',b='buzz';while(i<100)r=i,console.log([r,!(i%15)?a+b:!(i%5)?b:!(i%3)?a:'']+''),++i}()
