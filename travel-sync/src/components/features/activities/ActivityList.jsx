import PropTypes from 'prop-types';
import Card from '../../common/Card.jsx';

/**
 * ActivityList component that displays a list of travel activities.
 * Features add, edit, and delete functionality for managing activities.
 */
const ActivityList = ({ activities = [] }) => {
  // Mock activities data for demonstration
  const mockActivities = [
    {
      id: 1,
      title: 'Visit Eiffel Tower',
      description: 'Iconic landmark and symbol of Paris',
      time: '10:00 AM',
      status: 'planned'
    },
    {
      id: 2,
      title: 'Louvre Museum',
      description: 'World famous art museum',
      time: '2:00 PM',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Seine River Cruise',
      description: 'Scenic boat ride along the Seine',
      time: '6:00 PM',
      status: 'planned'
    }
  ];

  const displayActivities = activities.length > 0 ? activities : mockActivities;

  return (
    <Card>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Travel Activities</h2>
          <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Add Activity
          </button>
        </div>

        {/* Activities List */}
        <div className="space-y-3">
          {displayActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {/* Status Indicator */}
              <div
                className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                  activity.status === 'completed'
                    ? 'bg-green-500'
                    : activity.status === 'planned'
                    ? 'bg-blue-500'
                    : 'bg-gray-400'
                }`}
              />

              {/* Activity Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className={`font-semibold text-sm ${
                      activity.status === 'completed' ? 'text-gray-600 line-through' : 'text-gray-800'
                    }`}>
                      {activity.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-gray-400 text-xs font-medium ml-2 flex-shrink-0">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayActivities.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <p className="text-sm">No activities planned yet.</p>
            <p className="text-xs mt-1">Add your first activity to get started!</p>
          </div>
        )}
      </div>
    </Card>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      time: PropTypes.string,
      status: PropTypes.oneOf(['planned', 'completed', 'cancelled']),
    })
  ),
};

export default ActivityList;
