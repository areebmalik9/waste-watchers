import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service'
import { Device } from '../../models/Device'

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  device: Device[];
  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  	this.deviceService.getDevice().subscribe(device => {
  		console.log(device);
  		this.device = device;

  	});
  }

}
