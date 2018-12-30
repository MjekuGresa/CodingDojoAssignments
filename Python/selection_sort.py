arr = [6,5,3,1,8,7,2,0,4]

def selection_sort(arr):
     for i in range(len(arr)-1):
          min = i
          for j in range(i+1,len(arr)):
               if arr[j] < arr[min]:
                    min = j
          arr[min],arr[i] = arr[i],arr[min]
     return arr

print("Before sorted array:", arr)
print("Selection sorted array:", selection_sort(arr))