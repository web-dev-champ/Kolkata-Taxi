export default function WrongPassAlert()
{
    if (document.getElementById('pass').value !== "" &&
                document.getElementById('confirm_pass').value !== "") {
                alert("Your response is submitted");
            } else {
                alert("Please fill all the fields");
            }
}