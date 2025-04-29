import React, { useState, useEffect } from "react";
import FetchedAnswers from "../../components/FetchedAnswers/FetchedAnswers";

const PersonalizedSuggestions = () => {
  const [moodData, setMoodData] = useState([]);
  const [answersData, setAnswersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          throw new Error("User ID or Token not found in localStorage");
        }

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        // Fetch Mood Data
        console.log("🔹 Fetching Mood Data...");
        const moodResponse = await fetch(`http://localhost:4000/api/mood/today/${userId}`, { method: "GET", headers });
        const moodResult = await moodResponse.json();
        console.log("➡️ Mood API Response:", moodResult);

        if (!moodResponse.ok) {
          if (moodResponse.status === 401 || moodResponse.status === 403) {
            throw new Error("Unauthorized. Please login again.");
          }
          throw new Error(moodResult.message || "Failed to fetch mood data");
        }

        // ✅ Ensure it's stored as an array
        setMoodData(moodResult ? [moodResult] : []);

        // Fetch Answers Data
        console.log("🔹 Fetching Answers Data...");
        const answersResponse = await fetch(`http://localhost:4000/api/mood/get-answers/${userId}`, { method: "GET", headers });
        const answersResult = await answersResponse.json();
        console.log("➡️ Answers API Response:", answersResult);

        if (!answersResponse.ok) {
          if (answersResponse.status === 401 || answersResponse.status === 403) {
            throw new Error("Unauthorized. Please login again.");
          }
          throw new Error(answersResult.message || "Failed to fetch answers data");
        }

        setAnswersData(Array.isArray(answersResult) ? answersResult : []);

      } catch (error) {
        console.error("❌ Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading data...</p> : error ? <p className="error">{error}</p> : <FetchedAnswers moodData={moodData} answersData={answersData} />}
    </div>
  );
};

export default PersonalizedSuggestions;
