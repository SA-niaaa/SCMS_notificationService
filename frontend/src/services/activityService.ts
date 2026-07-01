export interface Activity {
  action: string;
  user: string;
  time: string;
}

export const getActivities = (): Activity[] => {
  return JSON.parse(
    localStorage.getItem("activities") || "[]"
  );
};

export const addActivity = (
  action: string
) => {
  const activities = getActivities();

  activities.unshift({
    action,
    user: "Admin",
    time: new Date().toLocaleString(),
  });

  localStorage.setItem(
    "activities",
    JSON.stringify(activities)
  );

  window.dispatchEvent(
    new Event("activityUpdated")
  );
};