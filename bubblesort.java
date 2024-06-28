import java.util.*;
public class bubblesort{
    public static void main(String[] args){
        arr=[10,9,5,7];
       for(int i=0;i < arr.length;i++){
    for(int j=0;j < arr.length-i;j++){
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    System.out.println(arr);       
} 
    }
}