import { useState, useEffect } from 'react';

export default function WeekPlan() {
    const [weekPlan, setWeekPlan] = useState({
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    });

    useEffect(() => {
        // Load week plan from localStorage on mount
        const storedPlan = JSON.parse(localStorage.getItem('weekPlan'));
        if (storedPlan) {
            setWeekPlan(storedPlan);
        }
    }, []);

    // Add task to the specified day
    const addTask = (day, task) => {
        const updatedDayTasks = [...weekPlan[day], { task, completed: false }];
        const updatedWeekPlan = { ...weekPlan, [day]: updatedDayTasks };
        setWeekPlan(updatedWeekPlan);
        localStorage.setItem('weekPlan', JSON.stringify(updatedWeekPlan));
    };

    // Mark task as done
    function toggleTaskCompletion(day, index) {
        const updatedDayTasks = weekPlan[day].map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        const updatedWeekPlan = { ...weekPlan, [day]: updatedDayTasks };
        setWeekPlan(updatedWeekPlan);
        localStorage.setItem('weekPlan', JSON.stringify(updatedWeekPlan));
    };

    // Remove task from the specified day
    function removeTask(day, index) {
        const updatedDayTasks = weekPlan[day].filter((_, i) => i !== index);
        const updatedWeekPlan = { ...weekPlan, [day]: updatedDayTasks };
        setWeekPlan(updatedWeekPlan);
        localStorage.setItem('weekPlan', JSON.stringify(updatedWeekPlan));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Weekly Plan</h1>
            {Object.keys(weekPlan).map((day) => (
                <div key={day} className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
                    <ul>
                        {weekPlan[day].map((task, index) => (
                            <li key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(day, index)}
                                />
                                <span className={`flex-grow ${task.completed ? 'line-through' : ''}`}>{task.task}</span>
                                <button
                                    className="text-red-500 ml-4"
                                    onClick={() => removeTask(day, index)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        placeholder={`Add task for ${day}`}
                        className="border p-2 mt-2 w-full"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.target.value) {
                                addTask(day, e.target.value);
                                e.target.value = ''; // Clear input after adding
                            }
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
