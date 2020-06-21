function myCurriculum(){
    var Content = `    <table>
    <tr>
        <td colspan="7">Curriculum List</td>
    </tr>
    <tr>
        <th>Curriculum Name</th>
        <th>Curriculum Owner</th>
        <th>Credits</th>
        <th>Total Terms</th>
        <th>Minimum Duration(Years)</th>
        <th>Maximum Duration(Years)</th>
        <th>Curriculum State</th>
    </tr>
    <tr>
        <td>B.Tech in CSE 2012 - 2016</td>
        <td>Dr. Shailesh Tiwari</td>
        <td>200</td>
        <td>8</td>
        <td>4</td>
        <td>8</td>
        <td>Active</td>
    </tr><tr>
        <td>B.Tech in CSE 2012 - 2016</td>
        <td>Dr. Shailesh Tiwari</td>
        <td>200</td>
        <td>8</td>
        <td>4</td>
        <td>8</td>
        <td>Active</td>
    </tr><tr>
        <td>B.Tech in CSE 2012 - 2016</td>
        <td>Dr. Shailesh Tiwari</td>
        <td>200</td>
        <td>8</td>
        <td>4</td>
        <td>8</td>
        <td>Active</td>
    </tr>
</table>`
document.getElementById("container").innerHTML = Content
document.getElementById("variable").href = "./myCurriculum.css"
}
function myAction(){
    var Content = `<div class="select-cirriculum">
            <label for="Curriculum">Curriculum Name :</label>

            <select name="Curriculum" id="Curriculum">
              <option value="Select Curriculum">Select Curriculum</option>
              <option value="B.Tech in CSE 2012 - 2016">B.Tech in CSE 2012 - 2016</option>
              <option value="B.Tech in CSE 2012 - 2016">B.Tech in CSE 2012 - 2016</option>
            </select> 
        </div>
        <table>
            <tr>
                <td>Curriculum Name</td>
                <td>Details</td>
                <td>Action Due</td>
            </tr>
            <tr>
                <td>B.Tech in CSE 2012 - 2016</td>
                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sequi reprehenderit qui architecto quasi dolorem molestiae velit sed sint perspiciatis eius deleniti adipisci provident, nesciunt, necessitatibus aliquid sapiente, quas optio!</td>
                <td>My Action</td>
            </tr>
            <tr>
                <td>B.Tech in CSE 2012 - 2016</td>
                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sequi reprehenderit qui architecto quasi dolorem molestiae velit sed sint perspiciatis eius deleniti adipisci provident, nesciunt, necessitatibus aliquid sapiente, quas optio!</td>
                <td>My Action</td>
            </tr>
            <tr>
                <td>B.Tech in CSE 2012 - 2016</td>
                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis sequi reprehenderit qui architecto quasi dolorem molestiae velit sed sint perspiciatis eius deleniti adipisci provident, nesciunt, necessitatibus aliquid sapiente, quas optio!</td>
                <td>My Action</td>
            </tr>
        </table>`
        document.getElementById("container").innerHTML = Content    
    document.getElementById("variable").href = "./myAction.css"    
}