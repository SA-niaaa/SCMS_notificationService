import { useEffect, useState } from "react";
import {
  getActivities,
} from "../services/activityService";

import type {
  Activity,
} from "../services/activityService";

function RecentActivity() {
  const [activities, setActivities] =
    useState<Activity[]>([]);

  useEffect(() => {
    const loadActivities = () => {
      setActivities(
        getActivities()
      );
    };

    loadActivities();

    window.addEventListener(
      "activityUpdated",
      loadActivities
    );

    return () => {
      window.removeEventListener(
        "activityUpdated",
        loadActivities
      );
    };
  }, []);

  return (
    <div
      className="
      bg-[#1f2937]
      border
      border-gray-700
      rounded-xl
      shadow-lg
      "
    >

      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        p-5
        border-b
        border-gray-700
        "
      >

        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            Recent Activities
          </h2>

          <p
            className="
            text-sm
            text-gray-400
            mt-1
            "
          >
            Latest system activities
          </p>

        </div>

      </div>

      {/* Activity List */}

      <div className="p-4">

        {activities.length === 0 ? (

          <div
            className="
            text-center
            py-10
            text-gray-400
            "
          >
            No Activities Yet
          </div>

        ) : (

          <div className="space-y-3">

            {activities
              .slice()
              .reverse()
              .map(
                (
                  activity,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                    flex
                    justify-between
                    items-center
                    bg-[#111827]
                    border
                    border-gray-700
                    rounded-lg
                    p-4
                    hover:bg-gray-800
                    transition
                    "
                  >

                    <div>

                      <p
                        className="
                        text-white
                        font-medium
                        "
                      >
                        {
                          activity.action
                        }
                      </p>

                      <p
                        className="
                        text-gray-400
                        text-sm
                        "
                      >
                        User:
                        {" "}
                        {
                          activity.user
                        }
                      </p>

                    </div>

                    <div
                      className="
                      text-sm
                      text-gray-500
                      "
                    >
                      {
                        activity.time
                      }
                    </div>

                  </div>

                )
              )}

          </div>

        )}

      </div>

    </div>
  );
}

export default RecentActivity;