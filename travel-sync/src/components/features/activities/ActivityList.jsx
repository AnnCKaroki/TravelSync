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
    <Card className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border-violet-100">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">✈️</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Travel Activities
            </h2>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-0.5 transition-all duration-200">
            + Add Activity
          </button>
        </div>

        {/* Activities List */}
        <div className="space-y-4">
          {displayActivities.map((activity) => (
            <div
              key={activity.id}
              className="group flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-violet-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300"
            >
              {/* Status Indicator */}
              <div className="flex flex-col items-center mt-1">
                <div
                  className={`w-4 h-4 rounded-full flex-shrink-0 shadow-lg transition-all duration-300 ${
                    activity.status === 'completed'
                      ? 'bg-gradient-to-r from-emerald-400 to-green-500'
                      : activity.status === 'planned'
                      ? 'bg-gradient-to-r from-blue-400 to-indigo-500'
                      : 'bg-gradient-to-r from-gray-300 to-gray-400'
                  }`}
                />
                <div className={`w-0.5 h-8 mt-2 ${
                  activity.status === 'completed' ? 'bg-emerald-200' : 'bg-violet-200'
                } last:hidden`}></div>
              </div>

              {/* Activity Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`font-semibold text-base transition-all duration-300 ${
                      activity.status === 'completed'
                        ? 'text-slate-500 line-through'
                        : 'text-slate-700 group-hover:text-violet-700'
                    }`}>
                      {activity.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-violet-300 rounded-full"></div>
                      <span className="text-violet-600 text-sm font-medium bg-violet-100/60 px-3 py-1 rounded-full">
                        {activity.time}
                      </span>
                    </div>
                    {activity.status === 'completed' && (
                      <div className="mt-2">
                        <span className="text-emerald-600 text-xs font-medium bg-emerald-100/60 px-2 py-1 rounded-full">
                          ✓ Completed
                        </span>
                      </div>
                    )}
                  </div>
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
