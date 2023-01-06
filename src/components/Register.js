import React from "react";
import { useForm } from "react-hook-form";
export default function Signup() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        let result = await fetch("http://localhost:4000/api/signup", {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        result = await result.json();
        console.log(result);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1>Registration</h1>
                </div>
                <div>
                    <label>First Name</label>
                    <input
                        placeholder="Enter First name"
                        {...register("name", { required: true })}
                    />
                    <error>
                        {errors.fname?.type === "required" && "Name is required"}
                    </error>
                </div>

                <div>
                    <label>Last Name</label>
                    <input
                        placeholder="Enter Last name"
                        {...register("lastname", { required: true })}
                    />
                    <error>
                        {errors.lname?.type === "required" && "Name is required"}
                    </error>
                </div>

                <div>
                    <label>Email</label>
                    <input
                        placeholder="Enter primary email"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                    />
                    <error>
                        {errors.email?.type === "required" && "Email is required"}
                        {errors.email?.type === "pattern" &&
                            "Entered email is in wrong format"}
                    </error>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input
                        type="number"
                        {...register("phoneno", {
                            minLength: 6,
                            maxLength: 12,
                        })}
                    />
                    <error>
                        {errors.number?.type === "minLength" &&
                            "Entered number is less than 6 digits"}
                        {errors.number?.type === "maxLength" &&
                            "Entered number is more than 12 digits"}
                    </error>
                </div>
                <div>
                    <label>Password</label>
                    <input
                        placeholder="Enter password"
                        {...register("password", {
                            required: true,
                            minLength: 5,
                            maxLength: 20,
                        })}
                    />

                    <error>
                        {errors.password?.type === "minLength" &&
                            "Entered password is less than 5 characters"}
                        {errors.password?.type === "maxLength" &&
                            "Entered password is more than 20 characters"}
                    </error>
                </div>
                <div >
                    <input className="button" type="submit" />
                </div>



                <div className=" form-check d-flex justify-content mx-3 mb-3">
                    <label for="role">Choose a Role</label>
                    <select aria-label="Default select example">
                        <option>Choose your role</option>
                        <option value="1">Artist</option>
                        <option value="2">Patron</option>

                    </select>

                    <details>
                        <summary><strong><center>i</center></strong></summary>
                        <p><ul>
                            <li> Patron -An individual, institutions like Hostels, Event Management, Wedding Planner, Large clubs etc ,
                                who promotes art by organising art events and pay for the same.</li>
                            <li>
                                Artist- An individual/ group/ institution knows about an art, performs professionally for financial gain and fame.
                                They would be mostly sellers (selling art)
                            </li>
                        </ul></p>
                    </details>

                </div>



                <div className="form-check d-flex-inline justify-content mx-5 mb-5" style={{ "background-color": "#edf2f5" }}>
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                        I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                </div>

                <div className="form-check d-flex-inline justify-content mb-5" style={{ "text-align": "center" }}>
                    <input className=" btn button btn-success btn-fluid " type="submit" />
                </div>
            </form>

        </div>
    );
}