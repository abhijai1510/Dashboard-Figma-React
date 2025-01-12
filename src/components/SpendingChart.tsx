import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './SpendingChart.css'

interface SpendingCategory {  // Changed from Category
  name: string
  amount: number
  percentage: number
  color: string
}

interface SpendingChartProps {
  categories: SpendingCategory[]  // This will now match the type being passed
}

export const SpendingChart = ({ categories }: SpendingChartProps) => {
  return (
    <div className="spending-chart">
      <h2 className="chart-title">Where your money go?</h2>
      
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-header">
              <span className="category-name">{category.name}</span>
              <span className="category-amount">${category.amount}</span>
            </div>
            <div className="progress-bar-container">
              <div 
                className="progress-bar"
                style={{ 
                  width: `${category.percentage}%`,
                  backgroundColor: category.color 
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categories}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="save-money-section">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e322e44e007117927441ee60f0d5a0beb5d36970c1400a1a5de26606a1d12a77"
          alt="Save money icon"
          className="save-money-icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/666d084afea2cbcb52b976f17a00fc47ac718c8ab636c42bc83a83a43200be5b"
          alt="Decoration"
          className="decoration-icon"
        />
        
        <p className="save-money-text">Save more money</p>
        <p className="description-text">eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button className="view-tips-button">VIEW TIPS</button>
      </div>
    </div>
  )
}

export default SpendingChart
