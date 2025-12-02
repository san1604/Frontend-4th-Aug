function safeDivide(a,b)
{
    try
    {
        if(b==0)
            return null
        let result = a/b
        console.log("result: ", result);
        
        return a/b
    }
    catch
    {
        return null
    }
}
safeDivide(5,2)