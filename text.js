function twoSum(nums, target){
    for(let i=0;i<nums.length;i++){
        let firstNum=i+1;
        let lastNum= nums.length;
        let mid= (firstNum +lastNum)/2;
        let number= target -nums[i];

        while(firstNum <= lastNum){
            if(number ==nums[mid]){
                return new (i,mid);
            }
            else if(number < nums[mid]){
                lastNum= mid-1;
            }
            else{
                firstNum = mid+1;
            }
        }
    }return null
}






let arr= [3,4,5,6,7,8,9];
let target=13;
console.log(twoSum(arr,target));

class Solution {
    public int[] twoSum(int[] nums, int t) {
       HashMap<Integer,Integer> x = new HashMap<Integer,Integer>();
        for(int i =0; i<nums.length; i++)
        {
            if(x.containsKey(t-nums[i]))
            {
                int u = x.get(t-nums[i]);
                return new int[]{u,i};
            }
            else
            {
                x.put(nums[i],i);
            }
        }
        return new int[]{1,1};
    }
}


