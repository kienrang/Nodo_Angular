import { Component } from '@angular/core';


@Component({
    selector: 'ng-for-comp',
    templateUrl: '/for.component.html'
})

export class ngForComponent {
    users = [{
        id: 1,
        name: "Kim Bear",
        email: "kbear@gmail.com",
        address: {
            stress: 'Mễ Trì',
            district: 'Nam Từ Liêm',
            city: 'Hà Nội'
        }
    },
    {
        id: 2,
        name: "Hết Tiền",
        email: "hettien@gmail.com",
        address: {
            stress: 'Trần Duy Hưng',
            district: 'Thanh Xuân',
            city: 'Hà Nội'
        }
    },
    {
        id: 3,
        name: "Ràng",
        email: "rang@gmail.com",
        address: {
            stress: 'Mĩ Đình',
            district: 'Nam Từ Liêm',
            city: 'Hà Nội'
        }
    },
    {
        id: 4,
        name: "Beers",
        email: "beer@gmail.com",
        address: {
            stress: 'Cầu giấy',
            district: 'Cầu giấy',
            city: 'Hà Nội'
        }
    }]

    // users = []
}