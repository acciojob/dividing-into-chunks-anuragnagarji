const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
let allSubArr=[];
	let temp=[],sum=0;
	for(let i=0;i<arr.length;i++){
   sum+=arr[i];
		if(sum<=n){
			temp.push(arr[i]);
		}
else		{
	allSubArr.push(temp);
  		temp=[];
	temp.push(arr[i]);
	  sum=arr[i];
}
		//for(let j=0;j<arr.length)
		}
	if(sum<n){
	allSubArr.push(temp);	
	}
return allSubArr;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
