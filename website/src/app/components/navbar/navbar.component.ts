import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	items: Array<any>;
	navBtn: any;
	nav: any;
	navItems: any;

	constructor() {
		
	 }

	ngOnInit(): void {
		this.navBtn = document.getElementById("nav-btn");
		this.nav = document.getElementById("nav-slide");
		this.navItems = document.getElementsByClassName("ns-item");

		// Navbar tabs
		this.items = [
			{
				label: "Dashboard",
				icon: "home",
				link: "/dashboard"
			},
			{
				label: "Production Units",
				icon: "keypad-outline",
				link: "/production-units"
			},
			{
				label: "PDF",
				icon: "archive-outline",
				link: "/pdf"
			}
		]

		// Click Event Listener for Navbar button
		this.navBtn.addEventListener('click', () => {
			if (!this.nav.classList.contains("hidden")) {
				this.nav.classList.add("hidden");
			}
			else {
				this.nav.classList.remove("hidden");
			}
		})

		// Event Listener on each tabs
		document.addEventListener("DOMContentLoaded", () => {
			for (let item of this.navItems) {
				item.addEventListener('click', () => {
					if (!this.nav.classList.contains("hidden")) {
						this.nav.classList.add("hidden");
					}
					else {
						this.nav.classList.remove("hidden");
					}
				})
			}
		})
	}

}
