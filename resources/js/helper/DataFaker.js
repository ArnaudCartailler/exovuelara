const providers = [{
        LotAprovider: 'AWS'
    },
    {
        LotAprovider: 'OVH'
    },
    {
        LotAprovider: 'OVH'
    }
];

const products = [{
        lotAProvider: 'AWS',
        lotAName: "AmazonEC2",
        lotACost: 47.21
    },
    {
        lotAProvider: 'AWS',
        lotAName: "AmazonCloudWatch",
        lotACost: 0
    },
    {
        lotAProvider: 'AWS',
        lotAName: "AmazonSES",
        lotACost: 0
    },
    {
        lotAProvider: 'OVH',
        lotAName: "VPS",
        lotACost: 0
    },
    {
        lotAProvider: 'OVH',
        lotAName: "PublicCloud",
        lotACost: 51.03
    },
    {
        lotAProvider: 'OVH',
        lotAName: "Hosting",
        lotACost: 0.03
    }
];

const summary = [{
        lotADate: '_month_to_date',
        lotACost: "12,21",
        lotACurCode: '$',
        lotATrend: '-7%'
    },
    {
        lotADate: '_last_30_days',
        lotACost: "41",
        lotACurCode: '$',
        lotATrend: '+8%'
    },
    {
        lotADate: '_year_to_date',
        lotACost: "111,4",
        lotACurCode: '$',
        lotATrend: '-12%'
    }
];

const categories = [{
        lotAType: '_compute',
        lotACost: "20",
        lotACurCode: '$'

    },
    {
        lotAType: '_storage',
        lotACost: "50",
        lotACurCode: '$'

    },
    {
        lotAType: '_network',
        lotACost: "15",
        lotACurCode: '$'

    },
    {
        lotAType: '_others',
        lotACost: "7",
        lotACurCode: '$'

    },
    {
        lotAType: '_all',
        lotACost: '92',
        lotACurCode: '$'

    }
];

const currencies = {
    USD: "$",
    EUR: "€"
};

const productsAndDetails = {
    AmazonEC2: {
        lotACost: 47.21,
        lotAProvider: "AWS",
        lotAName: "AmazonEC2",
        lotAFullName: "Amazon Elastic Compute Cloud",
        lotACurCode: 'USD',
        services: [{
                lotAName: "AmazonEC2",
                lotACost: 47.21,
                lotACurCode: 'USD',
            },
            {
                lotAName: "AWSDataTransfer",
                lotACost: 0,
                lotACurCode: 'USD',
            }
        ]
    },
    AmazonCloudWatch: {
        lotACost: 0,
        lotAProvider: "AWS",
        lotAName: "AmazonCloudWatch",
        lotAFullName: "Amazon Cloud Watch",
        lotACurCode: 'USD',
        services: [{
            lotAName: "AmazonCloudWatch",
            lotACost: 0,
            lotACurCode: 'USD',
        }]
    },
    AmazonSES: {
        lotACost: 0,
        lotAProvider: "AWS",
        lotAName: "AmazonSES",
        lotAFullName: "Amazon Simple Email Service",
        lotACurCode: 'USD',
        services: [{
                lotAName: "Amazon SES",
                lotACost: 0,
                lotACurCode: 'USD',
            },
            {
                lotAName: "AWSDataTransfer",
                lotACost: 0,
                lotACurCode: 'USD',
            }
        ]
    },
    VPS: {
        lotACost: 0,
        lotAProvider: "OVH",
        lotAName: "VPS",
        lotAFullName: "VPS VPS VPS",
        lotACurCode: 'USD',
        services: [{
            lotAName: "VPS toto1",
            lotACost: 0,
            lotACurCode: 'USD',
        }]
    },
    PublicCloud: {
        lotACost: 51.03,
        lotAProvider: "OVH",
        lotAName: "PublicCloud",
        lotAFullName: "PublicCloud PublicCloud PublicCloud",
        lotACurCode: 'USD',
        services: [{
                lotAName: "PublicCloud toto1",
                lotACost: 50,
                lotACurCode: 'USD',
            },
            {
                lotAName: "PublicCloud toto2",
                lotACost: 1.03,
                lotACurCode: 'USD',
            }
        ]
    },
    Hosting: {
        lotACost: 0.03,
        lotAProvider: "OVH",
        lotAName: "Hosting",
        lotAFullName: "Hosting Hosting Hosting",
        lotACurCode: 'USD',
        services: [{
            lotAName: "Hosting toto1",
            lotACost: 0.03,
            lotACurCode: 'USD',
        }]
    }
};

const instanceV2 = [{
        "id": 1,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 47.42
    },
    {
        "id": 3,
        "provider": "AWS",
        "product": "AmazonSES",
        "product_category": "other",
        "name": "AmazonSES/eu-west-1",
        "instance_id": null,
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 458.78
    },
    {
        "id": 45,
        "provider": "OVH",
        "product": "PublicCloud",
        "product_category": "compute",
        "name": "PublicCloud/dazz-dz4-e4542ze-ze45ez4",
        "instance_id": "dazz-dz4-e4542ze-ze45ez4",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "deleted",
        "cost": 0.28
    },
    {
        "id": 4587,
        "provider": "AWS",
        "product": "AmazonS3",
        "product_category": "storage",
        "name": "AmazonS3/vol-454fez56zefe45rg55e4",
        "instance_id": "vol-454fez56zefe45rg55e4",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 0.28
    },
    {
        "id": 14545,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 134.51
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 154645,
        "provider": "AWS",
        "product": "AmazonWorkSpace",
        "product_category": "compute",
        "name": "AmazonWorkSpace/arn:aws-data",
        "instance_id": "arn:aws-data",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 458.52
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
    {
        "id": 12128,
        "provider": "AWS",
        "product": "AmazonEC2",
        "product_category": "compute",
        "name": "AmazonEC2/i-815zd54d4sd54sv2",
        "instance_id": "i-815zd54d4sd54sv2",
        "created_at": "2019-03-01 11:45:20",
        "updated_at": "2019-09-04 17:52:25",
        "status": "active",
        "cost": 1271.45
    },
];

const User = [{
    id: 1,
    username: 'acartailler',
    firstname: 'Arnaud',
    lastname: 'Cartailler',
    userRole: 'Admin',
    email: 'acartailler@alacrite.fr',
    company_name: 'LotA'
}]

const AllUsers = [{
        id: 1,
        username: 'rkarmann',
        firstname: 'Romain',
        lastname: 'Karmann',
        userRole: 'Admin',
        email: 'rkarmann@alacrite.fr',
        company_name: 'LotA',
        created_at: '2019-18-03'
    },
    {
        id: 2,
        username: 'acartailler',
        firstname: 'Arnaud',
        lastname: 'Cartailler',
        userRole: 'Admin',
        email: 'acartailler@alacrite.fr',
        company_name: 'LotA',
        created_at: '2019-18-03'

    },
    {
        id: 3,
        username: 'agestat',
        firstname: 'Alexandre',
        lastname: 'Gestat',
        userRole: 'Admin',
        email: 'agestat@alacrite.fr',
        company_name: 'LotA',
        created_at: '2019-18-03'

    },
    {
        id: 4,
        username: 'crainsard',
        firstname: 'Clement',
        lastname: 'Rainsard',
        userRole: 'Admin',
        email: 'crainsard@alacrite.fr',
        company_name: 'LotA',
        created_at: '2019-18-03'

    },
]

function getInstancesV2() {
    return instanceV2;
};

function getUser() {
    return User;
};

function getAllUsers() {
    return AllUsers;
};

function getInstancesFromId(instanceId) {
    return instanceV2[instanceId];
};

function getProducts() {
    return products;
};

function getProviders() {
    return providers;
};

function getCategories() {
    return categories;
};

function getProductsWithDetails() {
    return productsAndDetails;
};

function getProductDetailsFromId(productId) {
    return productsAndDetails[productId];
};


function getCurrencySymbol(currency) {
    return currencies[currency];
};

function getProductServicesFromId(productId) {

    return productsAndDetails[productId].services;
};

function getSummary() {
    return summary;
};


export {
    getProducts,
    getProductsWithDetails,
    getProductDetailsFromId,
    getCurrencySymbol,
    getProductServicesFromId,
    getSummary,
    getCategories,
    getProviders,
    getInstancesV2,
    getInstancesFromId,
    getUser,
    getAllUsers
};
