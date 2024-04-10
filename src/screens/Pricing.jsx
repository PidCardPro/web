import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../styles/piercing.css";
import card from "../assets/img/photoTarjetaMovil.png";
import Footer from "../components/Footer";
export const Pricing = () => {
  const [userId, setUserId] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [client_type_id, setClient_type_id] = useState(null);

  useEffect(() => {
    const formData = new FormData();
    formData.append("mode", "username");
    formData.append("username", "system@pidcardpro.com");

    const loginWithUsername = async () => {
      try {
        const response = await fetch(
          "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/login",
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "ok") {
          setUserId(data.result.id);
          setAccessToken(data.result.token);
        } else {
          console.log("Error en el login con el nombre de usuario");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loginWithUsername();
  }, []);

  useEffect(() => {
    if (userId) {
      const userPassFormData = new FormData();
      userPassFormData.append("mode", "password");
      userPassFormData.append("id", userId);
      userPassFormData.append("password", "123456");

      const Password = async () => {
        try {
          const response = await fetch(
            "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/login",
            {
              method: "POST",
              headers: {
                Authorization: "Bearer " + accessToken,
              },
              body: userPassFormData,
            }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          if (data.status === "ok") {
            localStorage.setItem("accessToken", data.result.token);
          } else {
            console.log("Error");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      Password();
    }
  }, [userId, accessToken]);

  // 1 - professional
  useEffect(() => {
    const addUserFormData = new FormData();
    addUserFormData.append("_method", "POST");
    addUserFormData.append("email", "");
    addUserFormData.append("client_type_id", 1);
    addUserFormData.append("plan_id", 1);

    const addUser = async () => {
      try {
        const storedToken = localStorage.getItem("accessToken");

        const response = await fetch(
          "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/user",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + storedToken,
            },
            body: addUserFormData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "ok") {
        } else {
          console.log("Error en el login con el nombre de usuario");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    addUser();
  }, []);

  // 3 - Small company (5 users)
  useEffect(() => {
    const addUserFormData = new FormData();
    addUserFormData.append("_method", "POST");
    addUserFormData.append("email", "");
    addUserFormData.append("client_type_id", 2);
    addUserFormData.append("plan_id", 3);
    const addEnterprise = async () => {
      try {
        const storedToken = localStorage.getItem("accessToken");

        const response = await fetch(
          "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/user",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + storedToken,
            },
            body: addUserFormData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "ok") {
        } else {
          console.log("Error en el login con el nombre de usuario");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    addEnterprise();
  }, []);

  //4 -Startup (10 users)
  useEffect(() => {
    const addUserFormData = new FormData();
    addUserFormData.append("_method", "POST");
    addUserFormData.append("email", "");
    addUserFormData.append("client_type_id", 2);
    addUserFormData.append("plan_id", 4);
    const addEnterprise = async () => {
      try {
        const storedToken = localStorage.getItem("accessToken");

        const response = await fetch(
          "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/user",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + storedToken,
            },
            body: addUserFormData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "ok") {
        } else {
          console.log("Error en el login con el nombre de usuario");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    addEnterprise();
  }, []);

  //5 -medium company (20 users)

  useEffect(() => {
    const addUserFormData = new FormData();
    addUserFormData.append("_method", "POST");
    addUserFormData.append("email", "");
    addUserFormData.append("client_type_id", 2);
    addUserFormData.append("plan_id", 4);
    const addEnterprise = async () => {
      try {
        const storedToken = localStorage.getItem("accessToken");

        const response = await fetch(
          "http://192.168.1.46/labtest/elite-api-pidcardpro/v1/user",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + storedToken,
            },
            body: addUserFormData,
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.status === "ok") {
        } else {
          console.log("Error en el login con el nombre de usuario");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    addEnterprise();
  }, []);

  return (
    <div className="content">
      <Navbar />
      <div className="mt-[100px] pt-20">
        <div className="flex justify-center">
          <div>
            <img src={card} className="w-[600px]" />{" "}
          </div>
          <div className="pt-40">
            <h2 className="text-xl font-bold text-white">
              Your personal or enterprise digital card
            </h2>
            <p className=" text-white">
              Share your personal QR and...Lorem Ipsum is simply dummy text of
              the printing and typesetting industry.
            </p>
            <p className=" text-white">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type
            </p>
            <p className=" text-white">
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting
            </p>
          </div>
        </div>
        <h1 className="text-center text-3xl mb-20 text-white font-bold">
          {" "}
          Get Your Pidcard
        </h1>
        <div className="flex justify-center ">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-20">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Inividual Card
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              type="button"
              class="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
              10$ Card
            </button>
          </div>
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Enterprise card{" "}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button
              type="button"
              class="text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
              100$ Plan
            </button>
          </div>
        </div>
        <div className="flex justify-center pt-20">
          {/*         <input type="text"  value={email} onChange={handleInputChange}  /> */}
        </div>
      </div>
      {/*     <Footer/> */}
    </div>
  );
};
