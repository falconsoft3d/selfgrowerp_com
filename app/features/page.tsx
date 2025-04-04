import { Brain, BarChartIcon as ChartBar, Clock, Database, LineChart, Lock, Settings, Users } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">SelfGrowerP Features</h1>
        <p className="max-w-[700px] text-gray-400 md:text-xl">
          Discover the powerful capabilities that make our AI-powered ERP system unique
        </p>
      </div>

      <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Brain className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">AI-Powered Insights</h2>
          <p className="text-gray-400">
            Our advanced AI algorithms analyze your business data to provide actionable insights and recommendations.
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Predictive analytics</li>
            <li>• Anomaly detection</li>
            <li>• Trend identification</li>
            <li>• Decision support</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Database className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Unified Data Platform</h2>
          <p className="text-gray-400">Centralize all your business data in one secure, accessible location.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Single source of truth</li>
            <li>• Real-time data synchronization</li>
            <li>• Comprehensive data governance</li>
            <li>• Scalable architecture</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Settings className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Customizable Workflows</h2>
          <p className="text-gray-400">
            Adapt the system to your unique business processes with our flexible workflow engine.
          </p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Visual workflow designer</li>
            <li>• Conditional logic</li>
            <li>• Approval processes</li>
            <li>• Automation capabilities</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <ChartBar className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Advanced Reporting</h2>
          <p className="text-gray-400">Generate comprehensive reports with just a few clicks.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Customizable dashboards</li>
            <li>• Interactive visualizations</li>
            <li>• Scheduled reports</li>
            <li>• Export in multiple formats</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <LineChart className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Predictive Analytics</h2>
          <p className="text-gray-400">Forecast trends and make data-driven decisions with our predictive models.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Sales forecasting</li>
            <li>• Inventory optimization</li>
            <li>• Resource planning</li>
            <li>• Risk assessment</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Users className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Team Collaboration</h2>
          <p className="text-gray-400">Enable seamless collaboration across departments and teams.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Real-time communication</li>
            <li>• Document sharing</li>
            <li>• Task assignment</li>
            <li>• Progress tracking</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Lock className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Enterprise-Grade Security</h2>
          <p className="text-gray-400">Protect your valuable business data with our comprehensive security measures.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• End-to-end encryption</li>
            <li>• Role-based access control</li>
            <li>• Audit trails</li>
            <li>• Compliance certifications</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2 border border-[#30363d] p-6 rounded-lg bg-[#161b22]">
          <Clock className="h-8 w-8 text-[#238636]" />
          <h2 className="text-xl font-bold text-white">Rapid Implementation</h2>
          <p className="text-gray-400">Get up and running quickly with our streamlined implementation process.</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-400">
            <li>• Pre-built templates</li>
            <li>• Guided setup</li>
            <li>• Data migration tools</li>
            <li>• Comprehensive training</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

