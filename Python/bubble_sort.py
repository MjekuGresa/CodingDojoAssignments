#Build an algorithm for bubble sort
arr = [6,5,3,1,8,7,2,0,4]

def bubble_sort(arr):
     #print("Array is:",arr)
     for i in range(len(arr)-1):
          #print("Iteration:",i)
          for j in range(len(arr)-1-i):
               if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                    #print(arr)
     return arr

print('Before sorted array:', arr)
print('Bubble sorted array:', bubble_sort(arr))