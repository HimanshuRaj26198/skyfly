export const SampleRespone = [
    {
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT5H20M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H",
                        "id": "19",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T10:05:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T12:30:00"
                        },
                        "carrierCode": "AI",
                        "number": "543",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H25M",
                        "id": "20",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "19",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "20",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "2",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT7H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "587",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H40M",
                        "stops": [
                            {
                                "iataCode": "MAA",
                                "duration": "PT1H20M",
                                "arrivalAt": "2024-08-22T17:10:00",
                                "departureAt": "2024-08-22T18:30:00"
                            }
                        ],
                        "id": "2",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "840",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H20M",
                        "id": "3",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "3",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT9H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H",
                        "id": "53",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T14:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T16:55:00"
                        },
                        "carrierCode": "AI",
                        "number": "523",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H",
                        "id": "54",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "53",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "54",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "4",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT11H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H",
                        "id": "46",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T16:25:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:50:00"
                        },
                        "carrierCode": "AI",
                        "number": "541",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H25M",
                        "id": "47",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "46",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "47",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "5",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT12H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H",
                        "id": "57",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T17:35:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:55:00"
                        },
                        "carrierCode": "AI",
                        "number": "418",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H20M",
                        "id": "58",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "57",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "58",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "6",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT15H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "587",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H40M",
                        "stops": [
                            {
                                "iataCode": "MAA",
                                "duration": "PT1H20M",
                                "arrivalAt": "2024-08-22T17:10:00",
                                "departureAt": "2024-08-22T18:30:00"
                            }
                        ],
                        "id": "61",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-23T05:30:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T07:45:00"
                        },
                        "carrierCode": "AI",
                        "number": "554",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H15M",
                        "id": "62",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "61",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "62",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "7",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT15H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H",
                        "id": "74",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "840",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H20M",
                        "id": "75",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7255.00",
            "base": "5726.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7255.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7255.00",
                    "base": "5726.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "74",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "75",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "8",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T05:35:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T08:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "804",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "63",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7323.00",
            "base": "5961.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7323.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7323.00",
                    "base": "5961.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "63",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "9",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T11:45:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T14:35:00"
                        },
                        "carrierCode": "AI",
                        "number": "507",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "66",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7323.00",
            "base": "5961.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7323.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7323.00",
                    "base": "5961.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "66",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "10",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T13:20:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T16:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "501",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "67",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7323.00",
            "base": "5961.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7323.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7323.00",
                    "base": "5961.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "67",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "11",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT3H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T15:25:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:30:00"
                        },
                        "carrierCode": "AI",
                        "number": "511",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H5M",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7323.00",
            "base": "5961.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7323.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7323.00",
                    "base": "5961.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "6",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "12",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "587",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H40M",
                        "stops": [
                            {
                                "iataCode": "MAA",
                                "duration": "PT1H20M",
                                "arrivalAt": "2024-08-22T17:10:00",
                                "departureAt": "2024-08-22T18:30:00"
                            }
                        ],
                        "id": "50",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-23T06:20:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T08:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "559",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H20M",
                        "id": "51",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7683.00",
            "base": "6134.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7683.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7683.00",
                    "base": "6134.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "50",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "51",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "13",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT20H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "587",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H40M",
                        "stops": [
                            {
                                "iataCode": "MAA",
                                "duration": "PT1H20M",
                                "arrivalAt": "2024-08-22T17:10:00",
                                "departureAt": "2024-08-22T18:30:00"
                            }
                        ],
                        "id": "31",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-23T10:05:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T12:30:00"
                        },
                        "carrierCode": "AI",
                        "number": "543",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H25M",
                        "id": "32",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7683.00",
            "base": "6134.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7683.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7683.00",
                    "base": "6134.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "31",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "32",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "14",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T09:50:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T12:40:00"
                        },
                        "carrierCode": "AI",
                        "number": "505",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "65",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7717.00",
            "base": "6336.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7717.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7717.00",
                    "base": "6336.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "65",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXSII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "15",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T10:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "513",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H55M",
                        "id": "76",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7717.00",
            "base": "6336.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7717.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7717.00",
                    "base": "6336.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "76",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXSII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "16",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 7,
        "itineraries": [
            {
                "duration": "PT3H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T20:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:55:00"
                        },
                        "carrierCode": "AI",
                        "number": "808",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7717.00",
            "base": "6336.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7717.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7717.00",
                    "base": "6336.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXSII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "17",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT14H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T08:05:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T09:15:00"
                        },
                        "carrierCode": "AI",
                        "number": "516",
                        "aircraft": {
                            "code": "319"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "86",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "840",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H20M",
                        "id": "87",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7868.00",
            "base": "6310.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7868.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7868.00",
                    "base": "6310.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "86",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "87",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "18",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT2H35M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T08:00:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T10:35:00"
                        },
                        "carrierCode": "UK",
                        "number": "808",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H35M",
                        "id": "33",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7959.00",
            "base": "6607.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7959.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7959.00",
                    "base": "6607.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "33",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "19",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T09:50:00"
                        },
                        "carrierCode": "UK",
                        "number": "810",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H50M",
                        "id": "64",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "7959.00",
            "base": "6607.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "7959.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "7959.00",
                    "base": "6607.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "64",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "20",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T17:30:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T20:15:00"
                        },
                        "carrierCode": "UK",
                        "number": "820",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H45M",
                        "id": "52",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8012.00",
            "base": "6657.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8012.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8012.00",
                    "base": "6657.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "52",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "21",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T09:45:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T12:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "868",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H55M",
                        "id": "77",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8012.00",
            "base": "6657.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8012.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8012.00",
                    "base": "6657.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "77",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "22",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT5H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "897",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "25",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T10:10:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T12:30:00"
                        },
                        "carrierCode": "UK",
                        "number": "830",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H20M",
                        "id": "26",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8198.00",
            "base": "6704.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8198.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8198.00",
                    "base": "6704.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "25",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0RPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "26",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "23",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT12H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "897",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "82",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T17:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:55:00"
                        },
                        "carrierCode": "UK",
                        "number": "890",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H15M",
                        "id": "83",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8198.00",
            "base": "6704.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8198.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8198.00",
                    "base": "6704.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "82",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0RPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "83",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "24",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT15H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T08:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "897",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "59",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:35:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T22:45:00"
                        },
                        "carrierCode": "UK",
                        "number": "870",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H10M",
                        "id": "60",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8198.00",
            "base": "6704.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8198.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8198.00",
                    "base": "6704.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "59",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0RPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "60",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "25",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT7H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T05:55:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T07:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "561",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H5M",
                        "id": "9",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T09:50:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T13:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "430",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H15M",
                        "id": "10",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "9",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "10",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "26",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT7H25M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:00:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T17:10:00"
                        },
                        "carrierCode": "AI",
                        "number": "587",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "23",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "538",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H45M",
                        "id": "24",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "23",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "24",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "27",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT8H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T15:20:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T16:30:00"
                        },
                        "carrierCode": "AI",
                        "number": "585",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "7",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "538",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H45M",
                        "id": "8",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "7",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "8",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "28",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT11H35M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T10:35:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H25M",
                        "stops": [
                            {
                                "iataCode": "HYD",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:10:00",
                                "departureAt": "2024-08-22T09:25:00"
                            }
                        ],
                        "id": "36",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T15:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:45:00"
                        },
                        "carrierCode": "AI",
                        "number": "484",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "37",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "36",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "37",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "29",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT11H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:05:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T12:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "589",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT5H",
                        "stops": [
                            {
                                "iataCode": "BOM",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:50:00",
                                "departureAt": "2024-08-22T10:05:00"
                            }
                        ],
                        "id": "44",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T15:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:45:00"
                        },
                        "carrierCode": "AI",
                        "number": "484",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "45",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "44",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "45",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "30",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT12H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T10:35:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H25M",
                        "stops": [
                            {
                                "iataCode": "HYD",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:10:00",
                                "departureAt": "2024-08-22T09:25:00"
                            }
                        ],
                        "id": "48",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T16:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:50:00"
                        },
                        "carrierCode": "AI",
                        "number": "539",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H55M",
                        "id": "49",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "48",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "49",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "31",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT12H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:05:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T12:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "589",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT5H",
                        "stops": [
                            {
                                "iataCode": "BOM",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:50:00",
                                "departureAt": "2024-08-22T10:05:00"
                            }
                        ],
                        "id": "55",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T16:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:50:00"
                        },
                        "carrierCode": "AI",
                        "number": "539",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H55M",
                        "id": "56",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "55",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "56",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "32",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT12H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T05:55:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T07:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "561",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H5M",
                        "id": "72",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T15:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:45:00"
                        },
                        "carrierCode": "AI",
                        "number": "484",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "73",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "72",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "73",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "33",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT13H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T05:55:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T07:00:00"
                        },
                        "carrierCode": "AI",
                        "number": "561",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H5M",
                        "id": "84",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T16:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:50:00"
                        },
                        "carrierCode": "AI",
                        "number": "539",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H55M",
                        "id": "85",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "84",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "85",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "34",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H15M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T10:35:00"
                        },
                        "carrierCode": "AI",
                        "number": "583",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT3H25M",
                        "stops": [
                            {
                                "iataCode": "HYD",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:10:00",
                                "departureAt": "2024-08-22T09:25:00"
                            }
                        ],
                        "id": "17",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "538",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H45M",
                        "id": "18",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "17",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "18",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "35",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H20M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T07:05:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T12:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "589",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT5H",
                        "stops": [
                            {
                                "iataCode": "BOM",
                                "duration": "PT1H15M",
                                "arrivalAt": "2024-08-22T08:50:00",
                                "departureAt": "2024-08-22T10:05:00"
                            }
                        ],
                        "id": "21",
                        "numberOfStops": 1,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "538",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H45M",
                        "id": "22",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8352.00",
            "base": "6771.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8352.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8352.00",
                    "base": "6771.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "21",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "22",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "36",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT5H35M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T13:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T14:20:00"
                        },
                        "carrierCode": "AI",
                        "number": "564",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "34",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T15:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:45:00"
                        },
                        "carrierCode": "AI",
                        "number": "484",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "35",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8377.00",
            "base": "6795.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8377.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8377.00",
                    "base": "6795.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "34",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "35",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "37",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT6H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T13:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T14:20:00"
                        },
                        "carrierCode": "AI",
                        "number": "564",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "38",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T16:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:50:00"
                        },
                        "carrierCode": "AI",
                        "number": "539",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H55M",
                        "id": "39",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8377.00",
            "base": "6795.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8377.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8377.00",
                    "base": "6795.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "38",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "39",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "38",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT10H15M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T13:10:00"
                        },
                        "arrival": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T14:20:00"
                        },
                        "carrierCode": "AI",
                        "number": "564",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT1H10M",
                        "id": "15",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MAA",
                            "terminal": "4",
                            "at": "2024-08-22T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T23:25:00"
                        },
                        "carrierCode": "AI",
                        "number": "538",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H45M",
                        "id": "16",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8377.00",
            "base": "6795.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8377.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8377.00",
                    "base": "6795.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "15",
                        "cabin": "ECONOMY",
                        "fareBasis": "TU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "T",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "16",
                        "cabin": "ECONOMY",
                        "fareBasis": "SU1YXTII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "39",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T17:15:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T20:05:00"
                        },
                        "carrierCode": "AI",
                        "number": "503",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "68",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8515.00",
            "base": "7096.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8515.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8515.00",
                    "base": "7096.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "68",
                        "cabin": "ECONOMY",
                        "fareBasis": "LU1YXSII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "40",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 7,
        "itineraries": [
            {
                "duration": "PT2H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T19:30:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T22:20:00"
                        },
                        "carrierCode": "AI",
                        "number": "509",
                        "aircraft": {
                            "code": "32N"
                        },
                        "operating": {
                            "carrierCode": "AI"
                        },
                        "duration": "PT2H50M",
                        "id": "69",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8515.00",
            "base": "7096.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8515.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "AI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8515.00",
                    "base": "7096.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "69",
                        "cabin": "ECONOMY",
                        "fareBasis": "LU1YXSII",
                        "brandedFare": "ECOCOMF",
                        "brandedFareLabel": "ECO COMFORT",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "FREE CHECKED BAGGAGE ALLOWANCE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "41",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT7H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T17:00:00"
                        },
                        "arrival": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T18:20:00"
                        },
                        "carrierCode": "UK",
                        "number": "583",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H20M",
                        "id": "40",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T21:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T00:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "856",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H45M",
                        "id": "41",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8527.00",
            "base": "7018.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8527.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8527.00",
                    "base": "7018.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "40",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "41",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "42",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT10H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T06:10:00"
                        },
                        "arrival": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T07:30:00"
                        },
                        "carrierCode": "UK",
                        "number": "581",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H20M",
                        "id": "78",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T14:25:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T17:05:00"
                        },
                        "carrierCode": "UK",
                        "number": "848",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H40M",
                        "id": "79",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8527.00",
            "base": "7018.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8527.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8527.00",
                    "base": "7018.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "78",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "79",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "43",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT18H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T06:10:00"
                        },
                        "arrival": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T07:30:00"
                        },
                        "carrierCode": "UK",
                        "number": "581",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H20M",
                        "id": "29",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T21:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T00:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "856",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H45M",
                        "id": "30",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8527.00",
            "base": "7018.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8527.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8527.00",
                    "base": "7018.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "29",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "30",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "44",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 5,
        "itineraries": [
            {
                "duration": "PT11H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T12:45:00"
                        },
                        "arrival": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T14:05:00"
                        },
                        "carrierCode": "UK",
                        "number": "881",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H20M",
                        "id": "80",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "GOI",
                            "at": "2024-08-22T21:55:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-23T00:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "856",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H45M",
                        "id": "81",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8527.00",
            "base": "7018.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8527.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8527.00",
                    "base": "7018.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "80",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "81",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "45",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT8H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T09:30:00"
                        },
                        "arrival": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T11:25:00"
                        },
                        "carrierCode": "UK",
                        "number": "852",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H55M",
                        "id": "42",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T15:45:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "902",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H25M",
                        "id": "43",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8530.00",
            "base": "7021.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8530.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8530.00",
                    "base": "7021.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "42",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "43",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "46",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT10H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T09:30:00"
                        },
                        "arrival": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T11:25:00"
                        },
                        "carrierCode": "UK",
                        "number": "852",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H55M",
                        "id": "11",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T17:25:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "910",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H15M",
                        "id": "12",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8530.00",
            "base": "7021.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8530.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8530.00",
                    "base": "7021.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "11",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "12",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "47",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT11H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T06:40:00"
                        },
                        "arrival": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T08:25:00"
                        },
                        "carrierCode": "UK",
                        "number": "866",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H45M",
                        "id": "27",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T15:45:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T18:10:00"
                        },
                        "carrierCode": "UK",
                        "number": "902",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H25M",
                        "id": "28",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8530.00",
            "base": "7021.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8530.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8530.00",
                    "base": "7021.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "27",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "28",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "48",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT13H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T06:40:00"
                        },
                        "arrival": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T08:25:00"
                        },
                        "carrierCode": "UK",
                        "number": "866",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H45M",
                        "id": "4",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "BOM",
                            "terminal": "2",
                            "at": "2024-08-22T17:25:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "910",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H15M",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8530.00",
            "base": "7021.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8530.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8530.00",
                    "base": "7021.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "4",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "5",
                        "cabin": "ECONOMY",
                        "fareBasis": "VL1PTFYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "49",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 3,
        "itineraries": [
            {
                "duration": "PT4H15M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T18:30:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T19:40:00"
                        },
                        "carrierCode": "UK",
                        "number": "893",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "13",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:35:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T22:45:00"
                        },
                        "carrierCode": "UK",
                        "number": "870",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H10M",
                        "id": "14",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8537.00",
            "base": "7027.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8537.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8537.00",
                    "base": "7027.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "13",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0RPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "14",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "50",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2024-08-20",
        "lastTicketingDateTime": "2024-08-20",
        "numberOfBookableSeats": 6,
        "itineraries": [
            {
                "duration": "PT5H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "BLR",
                            "terminal": "2",
                            "at": "2024-08-22T16:55:00"
                        },
                        "arrival": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T18:05:00"
                        },
                        "carrierCode": "UK",
                        "number": "887",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT1H10M",
                        "id": "70",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HYD",
                            "at": "2024-08-22T20:35:00"
                        },
                        "arrival": {
                            "iataCode": "DEL",
                            "terminal": "3",
                            "at": "2024-08-22T22:45:00"
                        },
                        "carrierCode": "UK",
                        "number": "870",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "UK"
                        },
                        "duration": "PT2H10M",
                        "id": "71",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "INR",
            "total": "8537.00",
            "base": "7027.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "8537.00"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "UK"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "INR",
                    "total": "8537.00",
                    "base": "7027.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "70",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0RPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "71",
                        "cabin": "ECONOMY",
                        "fareBasis": "V0GRPRYS",
                        "brandedFare": "ECOYS",
                        "brandedFareLabel": "ECO STANDARD",
                        "class": "V",
                        "includedCheckedBags": {
                            "weight": 15,
                            "weightUnit": "KG"
                        },
                        "includedCabinBags": {
                            "weight": 7,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "EXCESS HAND BAGGAGE 5KG",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "VISTARA SELECT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL SERVICES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHECK IN",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BAGGAGE HANDLING",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE ELIGIBILITY",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]



