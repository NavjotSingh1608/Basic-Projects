import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const Content = () => {
  const [ShowPassword, setShowPassword] = useState(false);
  const [Form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  const getpassword = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setPasswordArray(passwords);
  }
  
  const handleshowpassword = () => {
    setShowPassword(!ShowPassword);
  };

  useEffect(() => {
    getpassword()
    }, [])

  const handlesavepassword = async () => {
    if (!Form.password) {
      alert("Password cannot be empty");
      return;
    }
    let id = uuidv4();
    await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Form, id }) });

    setForm({ site: "", username: "", password: "" });
    getpassword();
  };

  const handledeletepassword = async (id) => {
    const newPasswordArray = passwordArray.filter((item) => item.id !== id);
    setPasswordArray(newPasswordArray);

    await fetch("http://localhost:3000/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  };
  
  const handleeditpassword = (id) => {
    const passwordToEdit = passwordArray.find((item) => item.id === id);
    if (passwordToEdit) {
      handledeletepassword(id); // Delete the existing password
      setForm({ ...passwordToEdit, id: uuidv4() });
    }
  };
  
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  return (
    <>
      <div className="content mt-16">
        <div className="page m-2 text-justify p-2">
          <div className="welcome text-4xl mt-2 sm:text-5xl md:text-6xl font-">
            Welcome User
          </div>
        </div>

        <div className="aboutus m-2 flex flex-col justify-around bg-gray-200 shadow-md rounded-lg">
          <div className="titleabout m-2 font-bold text-4xl"> About Us, </div>
          <div className="titlecontent m-2">
            <p>
              PassManager was founded with a simple mission: to make managing
              your passwords and personal information secure, easy, and
              accessible. Our team is committed to providing top-notch security
              and user-friendly features that allow you to keep your digital
              life organized and protected.
            </p>
            <h3 className="mt-4 font-bold text-xl">Features</h3>
            <ul className="list-disc list-inside m-2">
              <li>
                <strong>Secure Storage:</strong> Keep all your passwords and
                sensitive information encrypted and secure.
              </li>
              <li>
                <strong>Easy Access:</strong> Access your stored information
                quickly with a user-friendly interface.
              </li>
              <li>
                <strong>Auto-Fill:</strong> Automatically fill in login details
                on websites and apps.
              </li>
              <li>
                <strong>Multi-Platform Support:</strong> Use PassManager on your
                phone, tablet, and computer.
              </li>
              <li>
                <strong>Password Generator:</strong> Create strong, unique
                passwords for each of your accounts.
              </li>
              <li>
                <strong>Two-Factor Authentication (2FA):</strong> Add an extra
                layer of security to your account.
              </li>
            </ul>
            <h3 className="mt-4 font-bold text-xl">Our Values</h3>
            <ul className="list-disc list-inside m-2">
              <li>
                <strong>Security First:</strong> Your data's security is our
                highest priority.
              </li>
              <li>
                <strong>User-Focused:</strong> We design our features with the
                user in mind, ensuring ease of use and accessibility.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly innovate to provide
                you with the best tools and features.
              </li>
              <li>
                <strong>Privacy:</strong> We respect your privacy and ensure
                that your data is never shared without your consent.
              </li>
            </ul>
            <p className="mt-4">
              Join millions of users who trust PassManager to keep their digital
              lives secure and organized. Our commitment to excellence and
              security ensures that you can manage your passwords and personal
              information with confidence.
            </p>
          </div>
        </div>

        <div className="entry flex flex-col justify-center m-2 mt-8 h-auto p-2 bg-gray-200 rounded-xl drop-shadow-lg hover:border-blue-500">
          <div className="m-2 p-1 md:text-center md:text-xl rounded-lg text-sm font-bold">
            {" "}
            Add a New Password{" "}
          </div>
          <input
            type="text"
            onChange={handlechange}
            name="site"
            value={Form.site}
            className="website w-auto rounded-lg m-2 h-10 p-2 border hover:border-2 hover:border-blue-400 focus:outline-none"
            placeholder="Enter Website URL"
          />

          <div className="below flex flex-col md:flex-row">
            <input
              type="text"
              onChange={handlechange}
              name="username"
              value={Form.username}
              className="website w-auto md:w-1/2 rounded-lg m-2 h-10 p-2 border hover:border-2 hover:border-blue-400 focus:outline-none"
              placeholder="Enter Username"
            />

            <input
              type={`${ShowPassword ? "text" : "password"}`}
              onChange={handlechange}
              value={Form.password}
              name="password"
              className="website w-auto md:w-1/2 rounded-lg m-2 h-10 p-2 border hover:border-2 hover:border-blue-400 focus:outline-none"
              placeholder="Enter Password"
            />

            <button
              onClick={handleshowpassword}
              className="absolute right-6 top-44 md:top-32  border-2 rounded-lg w-auto p-1 text-sm bg-blue-500 text-white cursor-pointer hover:border-blue-400"
            >
              {ShowPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="btn flex justify-center">
            <button
              onClick={handlesavepassword}
              className="bg-blue-500 p-2 w-full md:w-auto h-auto rounded-full m-2 text-white border-2 hover:border-blue-400"
            >
              Add Password
            </button>
          </div>
        </div>

        {passwordArray.length === 0 && (
          <div className="text-2xl bg-gray-200 font-bold text-center p-2 m-6 rounded-xl">
            {" "}
            Your Passwords will appear here{" "}
            <div className="text-md p-2 m-2">
              {" "}
              Currently no password to show !!
            </div>{" "}
          </div>
        )}
        {passwordArray.length !== 0 && (
          <div className="tables p-2 mt-4 rounded-lg w-full">
            Your Stored Passwords
            <table className="bg-gray-200 table-fixed w-full text-center rounded-xl">
              <thead>
                <tr>
                  <th className="text-sm text-center p-1 border-2 border-white"> Website </th>
                  <th className="text-sm text-center p-1 border-2 border-white"> Username </th>
                  <th className="text-sm text-center p-1 border-2 border-white"> Password </th>
                  <th className="text-sm text-center p-1 border-2 border-white"> Actions </th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item) => (
                  <tr key={item.id}>
                    <td className="p-4 border-2 border-white break-words whitespace-normal">
                      {" "}
                      {item.site}{" "}
                    </td>
                    <td className="p-4 border-2 border-white break-words whitespace-normal">
                      {" "}
                      {item.username}{" "}
                    </td>
                    <td className="p-4 border-2 border-white break-words whitespace-normal">
                      {" "}
                      {item.password}{" "}
                    </td>
                    <td className=" flex flex-col sm:flex-row sm:justify-center sm:gap-4 p-4 border-2 border-white break-words whitespace-normal">
                      <div onClick={()=>{handleeditpassword(item.id)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/wuvorxbv.json"
                          trigger="hover"
                          style={{ height: "24px", width: "24px" }}
                        ></lord-icon>
                      </div>
                      <div onClick={()=>{handledeletepassword(item.id)}}>
                        <lord-icon
                          src="https://cdn.lordicon.com/wpyrrmcq.json"
                          trigger="hover"
                          style={{ height: "24px", width: "24px" }}
                        ></lord-icon>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>
    </>
  );
};

export default Content;
