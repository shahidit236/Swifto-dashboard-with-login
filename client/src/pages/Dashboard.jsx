import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import AddCategoryForm from './AddCategoryForm'
import Products from './Products'


export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<AddCategoryForm/>
			<Products/>
		</div>
	)
}
