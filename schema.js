module.exports = {
  "xs:schema": {
    "$": {
      "xmlns:xs": "http://www.w3.org/2001/XMLSchema",
      "xmlns": "http://www.w3.org/1999/xhtml",
      "xmlns:mml": "http://www.w3.org/1998/Math/MathML",
      "xmlns:svg": "http://www.w3.org/2000/svg",
      "targetNamespace": "http://www.w3.org/1999/xhtml",
      "elementFormDefault": "qualified",
      "attributeFormDefault": "unqualified"
    },
    "xs:import": [
      {
        "$": {
          "namespace": "http://www.w3.org/1998/Math/MathML",
          "schemaLocation": "mathml3/mathml3.xsd"
        }
      },
      {
        "$": {
          "namespace": "http://www.w3.org/2000/svg",
          "schemaLocation": "svg/SVG.xsd"
        }
      }
    ],
    "xs:element": [
      {
        "$": {
          "name": "html"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "head"
                    }
                  },
                  {
                    "$": {
                      "ref": "body"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "head"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "title"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "$": {
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    },
                    "xs:element": [
                      {
                        "$": {
                          "ref": "base"
                        }
                      },
                      {
                        "$": {
                          "ref": "command"
                        }
                      },
                      {
                        "$": {
                          "ref": "link"
                        }
                      },
                      {
                        "$": {
                          "ref": "meta"
                        }
                      },
                      {
                        "$": {
                          "ref": "script"
                        }
                      },
                      {
                        "$": {
                          "ref": "style"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "body"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "h1",
                      "minOccurs": "0"
                    }
                  },
                  {
                    "$": {
                      "name": "h2",
                      "minOccurs": "0",
                      "type": "subheading"
                    }
                  },
                  {
                    "$": {
                      "name": "figure",
                      "minOccurs": "0",
                      "type": "coverfigure"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "$": {
                      "maxOccurs": "unbounded"
                    },
                    "xs:element": [
                      {
                        "$": {
                          "ref": "nav"
                        }
                      },
                      {
                        "$": {
                          "name": "section",
                          "type": "bookmaindiv"
                        }
                      },
                      {
                        "$": {
                          "name": "div",
                          "type": "bookpart"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "data-type",
                  "use": "required",
                  "fixed": "book"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "title"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "base"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "href",
                          "type": "xs:anyURI",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "target",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "link"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "href",
                          "type": "xs:anyURI",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "hreflang",
                          "type": "xs:language"
                        }
                      },
                      {
                        "$": {
                          "name": "media",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "ref",
                          "type": "xs:NMTOKENS"
                        }
                      },
                      {
                        "$": {
                          "name": "sizes",
                          "type": "xs:NMTOKENS"
                        }
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "meta"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "$": {
                  "mixed": "true"
                },
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "name",
                          "type": "xs:string",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "content",
                          "type": "xs:string",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "charset",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "http-equiv"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "content-language"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "content-type"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "default-style"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "refresh"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "set-cookie"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "script"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "src",
                          "type": "xs:anyURI",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "async"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "([Aa][Ss][Yy][Nn][Cc])?"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "defer"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "([Dd][Ee][Ff][Ee][Rr])?"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "charset",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "style"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:attribute": [
              {
                "$": {
                  "name": "media",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "type",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "scoped"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "([Ss][Cc][Oo][Pp][Ee][Dd])?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "address",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "aside",
          "type": "sidebar"
        }
      },
      {
        "$": {
          "name": "audio"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "source",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "track",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "generalmediaattributes"
                }
              },
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "blockquote"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "block_xor_inline_children"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "cite",
                          "type": "xs:anyURI"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "canvas"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "block_xor_inline_children"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "width",
                          "type": "positive_int"
                        }
                      },
                      {
                        "$": {
                          "name": "height",
                          "type": "positive_int"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "details"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "summary",
                      "minOccurs": "0",
                      "maxOccurs": "1"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "blockelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "inlineelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "open"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "([Oo][Pp][Ee][Nn])?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "div"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "xs:sequence": [
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "headings",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "blockelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ],
                "xs:group": [
                  {
                    "$": {
                      "ref": "inlineelements",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "dl"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "$": {
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "dt",
                      "minOccurs": "1",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "dd",
                      "minOccurs": "1",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "embed"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "src",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "width",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "height",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "fieldset"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "legend",
                      "minOccurs": "0",
                      "maxOccurs": "1"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "blockelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "inlineelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "disabled",
                  "type": "disabled_boolean"
                }
              },
              {
                "$": {
                  "name": "name",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "figure"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "xs:sequence": [
                  {
                    "xs:element": [
                      {
                        "$": {
                          "ref": "figcaption"
                        }
                      }
                    ],
                    "xs:group": [
                      {
                        "$": {
                          "ref": "figure_elements",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  },
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "figure_elements",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ],
                    "xs:element": [
                      {
                        "$": {
                          "ref": "figcaption"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "form"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "address"
                    }
                  },
                  {
                    "$": {
                      "ref": "aside"
                    }
                  },
                  {
                    "$": {
                      "ref": "audio"
                    }
                  },
                  {
                    "$": {
                      "ref": "blockquote"
                    }
                  },
                  {
                    "$": {
                      "ref": "canvas"
                    }
                  },
                  {
                    "$": {
                      "ref": "details"
                    }
                  },
                  {
                    "$": {
                      "ref": "div"
                    }
                  },
                  {
                    "$": {
                      "ref": "dl"
                    }
                  },
                  {
                    "$": {
                      "ref": "embed"
                    }
                  },
                  {
                    "$": {
                      "ref": "fieldset"
                    }
                  },
                  {
                    "$": {
                      "ref": "figure"
                    }
                  },
                  {
                    "$": {
                      "ref": "hr"
                    }
                  },
                  {
                    "$": {
                      "ref": "iframe"
                    }
                  },
                  {
                    "$": {
                      "ref": "map"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "menu"
                    }
                  },
                  {
                    "$": {
                      "ref": "object"
                    }
                  },
                  {
                    "$": {
                      "ref": "ol"
                    }
                  },
                  {
                    "$": {
                      "ref": "p"
                    }
                  },
                  {
                    "$": {
                      "ref": "pre"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  },
                  {
                    "$": {
                      "ref": "table"
                    }
                  },
                  {
                    "$": {
                      "ref": "ul"
                    }
                  },
                  {
                    "$": {
                      "ref": "video"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "accept-charset",
                  "type": "xs:NMTOKENS"
                }
              },
              {
                "$": {
                  "name": "action"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:anyURI"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "autocomplete",
                  "type": "on_off"
                }
              },
              {
                "$": {
                  "name": "enctype",
                  "type": "enctype_formenctype"
                }
              },
              {
                "$": {
                  "name": "method",
                  "type": "method_formmethod"
                }
              },
              {
                "$": {
                  "name": "name"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "novalidate"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "([Nn][Oo][Vv][Aa][Ll][Ii][Dd][Aa][Tt][Ee])?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "target",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "hr",
          "type": "empty_elem_global_attrs"
        }
      },
      {
        "$": {
          "name": "iframe"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:group": [
              {
                "$": {
                  "ref": "inlineelements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "src",
                  "use": "required",
                  "type": "xs:anyURI"
                }
              },
              {
                "$": {
                  "name": "srcdoc",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "name",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "sandbox"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "allow-(same-origin|top-navigation|forms|scripts)( allow-(same-origin|top-navigation|forms|scripts))*"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "seamless"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "([Ss][Ee][Aa][Mm][Ll][Ee][Ss][Ss])?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "width",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "height",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "map"
        },
        "xs:complexType": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "map_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "name",
                  "use": "required"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ],
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "[^ ]*"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "menu"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "li",
                      "maxOccurs": "unbounded"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "blockelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "inlineelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "type"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:enumeration": [
                          {
                            "$": {
                              "value": "context"
                            }
                          },
                          {
                            "$": {
                              "value": "toolbar"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "label",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "nav"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:group": [
                  {
                    "$": {
                      "ref": "headings",
                      "minOccurs": "0"
                    }
                  }
                ],
                "xs:element": [
                  {
                    "$": {
                      "name": "ol",
                      "type": "nav_doc_ol",
                      "minOccurs": "0"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "data-type",
                  "use": "required",
                  "fixed": "toc"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "object"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "param",
                      "minOccurs": "0",
                      "maxOccurs": "1"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "xs:group": [
                      {
                        "$": {
                          "ref": "blockelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "inlineelements",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "data"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:anyURI"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "type",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "name",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "usemap",
                  "type": "hash_name"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "width",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "height",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "ol"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "name": "li",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    },
                    "xs:complexType": [
                      {
                        "xs:complexContent": [
                          {
                            "xs:extension": [
                              {
                                "$": {
                                  "base": "block_xor_inline_children"
                                },
                                "xs:attribute": [
                                  {
                                    "$": {
                                      "name": "value",
                                      "type": "positive_int"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "ol_attrs"
                }
              },
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "p",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "pre"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "data-code-language",
                          "type": "xs:token"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "section",
          "type": "bookmaindiv"
        }
      },
      {
        "$": {
          "name": "table"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "caption",
                      "minOccurs": "0"
                    }
                  },
                  {
                    "$": {
                      "ref": "colgroup",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "thead",
                      "minOccurs": "0"
                    }
                  },
                  {
                    "$": {
                      "ref": "tfoot",
                      "minOccurs": "0"
                    }
                  }
                ],
                "xs:choice": [
                  {
                    "xs:element": [
                      {
                        "$": {
                          "ref": "tbody",
                          "minOccurs": "0",
                          "maxOccurs": "unbounded"
                        }
                      },
                      {
                        "$": {
                          "ref": "tr",
                          "maxOccurs": "unbounded"
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "border"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "1?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "ul"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "li",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "video"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "source",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "track",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "videomediaattributes"
                }
              },
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "a"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "href",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "hreflang",
                          "type": "xs:language"
                        }
                      },
                      {
                        "$": {
                          "name": "rel",
                          "type": "xs:NMTOKENS"
                        }
                      },
                      {
                        "$": {
                          "name": "target",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-primary",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-secondary",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-tertiary",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-see",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-seealso",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "data-sortas",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "abbr",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "b",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "bdi",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "bdo"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:sequence": [
              {
                "xs:group": [
                  {
                    "$": {
                      "ref": "inlines_plus_mml_and_svg",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "dir",
                  "use": "required"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:enumeration": [
                          {
                            "$": {
                              "value": "ltr"
                            }
                          },
                          {
                            "$": {
                              "value": "rtl"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals_minus_dir"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "br",
          "type": "empty_elem_global_attrs"
        }
      },
      {
        "$": {
          "name": "button"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "dfn"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "meter"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "progress"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "time"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "autofocus",
                  "type": "autofocus_boolean"
                }
              },
              {
                "$": {
                  "name": "disabled",
                  "type": "disabled_boolean"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "formaction"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:anyURI"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "formenctype",
                  "type": "enctype_formenctype"
                }
              },
              {
                "$": {
                  "name": "formmethod",
                  "type": "method_formmethod"
                }
              },
              {
                "$": {
                  "name": "formnovalidate",
                  "type": "formnovalidate_boolean"
                }
              },
              {
                "$": {
                  "name": "formtarget",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "name",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "type"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:enumeration": [
                          {
                            "$": {
                              "value": "submit"
                            }
                          },
                          {
                            "$": {
                              "value": "reset"
                            }
                          },
                          {
                            "$": {
                              "value": "button"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "value",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "cite",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "command"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "type"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "command"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "checkbox"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "radio"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "label",
                          "use": "required"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:string"
                                },
                                "xs:minLength": [
                                  {
                                    "$": {
                                      "value": "1"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "icon",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "disabled",
                          "type": "disabled_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "checked",
                          "type": "checked_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "radiogroup",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "code",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "datalist"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "xs:group": [
                  {
                    "$": {
                      "ref": "inlineelements",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ],
                "xs:element": [
                  {
                    "$": {
                      "ref": "option",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "del"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "cite",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "datetime",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "dfn"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "button"
                    }
                  },
                  {
                    "$": {
                      "ref": "command"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "datalist"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "input"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "keygen"
                    }
                  },
                  {
                    "$": {
                      "ref": "label"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "meter"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "progress"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "select"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "textarea"
                    }
                  },
                  {
                    "$": {
                      "ref": "time"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "em",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "i",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "img"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "alt",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "usemap",
                          "type": "hash_name"
                        }
                      },
                      {
                        "$": {
                          "name": "ismap"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "([Ii][Ss][Mm][Aa][Pp])?"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "src",
                          "use": "required",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "width",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "height",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "input"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "accept",
                          "type": "xs:NMTOKENS"
                        }
                      },
                      {
                        "$": {
                          "name": "alt",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "autocomplete",
                          "type": "on_off"
                        }
                      },
                      {
                        "$": {
                          "name": "autofocus",
                          "type": "autofocus_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "checked",
                          "type": "checked_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "dirname",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "disabled",
                          "type": "disabled_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "form",
                          "type": "xs:IDREF"
                        }
                      },
                      {
                        "$": {
                          "name": "formaction",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "formenctype",
                          "type": "enctype_formenctype"
                        }
                      },
                      {
                        "$": {
                          "name": "formmethod",
                          "type": "method_formmethod"
                        }
                      },
                      {
                        "$": {
                          "name": "formnovalidate",
                          "type": "formnovalidate_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "formtarget",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "height",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "list",
                          "type": "xs:IDREF"
                        }
                      },
                      {
                        "$": {
                          "name": "max",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "maxlength",
                          "type": "positive_int"
                        }
                      },
                      {
                        "$": {
                          "name": "min",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "multiple",
                          "type": "multiple_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "name"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:string"
                                },
                                "xs:minLength": [
                                  {
                                    "$": {
                                      "value": "1"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "pattern",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "placeholder",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "readonly",
                          "type": "readonly_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "required",
                          "type": "required_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "size",
                          "type": "positive_int"
                        }
                      },
                      {
                        "$": {
                          "name": "src",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "step"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:float"
                                },
                                "xs:minExclusive": [
                                  {
                                    "$": {
                                      "value": "0"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "type"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "hidden"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "text"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "search"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "tel"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "url"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "email"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "password"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "datetime"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "date"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "month"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "week"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "time"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "datetime-local"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "number"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "range"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "color"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "checkbox"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "radio"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "file"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "submit"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "image"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "reset"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "button"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "value",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "width",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "ins"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "cite",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "datetime",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "kbd",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "keygen"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "autofocus",
                          "type": "autofocus_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "challenge",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "disabled",
                          "type": "disabled_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "form",
                          "type": "xs:IDREF"
                        }
                      },
                      {
                        "$": {
                          "name": "keytype"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "rsa"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "name",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "label"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "button"
                    }
                  },
                  {
                    "$": {
                      "ref": "command"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "datalist"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "dfn"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "input"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "keygen"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "meter"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "progress"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "select"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "textarea"
                    }
                  },
                  {
                    "$": {
                      "ref": "time"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "for",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "mark",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "meter"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "button"
                    }
                  },
                  {
                    "$": {
                      "ref": "command"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "datalist"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "dfn"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "input"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "label"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "keygen"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "progress"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "select"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "textarea"
                    }
                  },
                  {
                    "$": {
                      "ref": "time"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "high",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "low",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "max",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "min",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "optimum",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "value",
                  "type": "xs:float"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "output"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "for",
                          "type": "xs:IDREF"
                        }
                      },
                      {
                        "$": {
                          "name": "form",
                          "type": "xs:IDREF"
                        }
                      },
                      {
                        "$": {
                          "name": "name",
                          "type": "nonemptystring"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "progress"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "button"
                    }
                  },
                  {
                    "$": {
                      "ref": "command"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "datalist"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "dfn"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "input"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "label"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "keygen"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "meter"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "select"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "textarea"
                    }
                  },
                  {
                    "$": {
                      "ref": "time"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "max",
                  "type": "xs:float"
                }
              },
              {
                "$": {
                  "name": "value",
                  "type": "xs:float"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "q"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "cite",
                          "type": "xs:anyURI"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "ruby"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:choice": [
                      {
                        "xs:element": [
                          {
                            "$": {
                              "ref": "rt"
                            }
                          }
                        ],
                        "xs:sequence": [
                          {
                            "xs:element": [
                              {
                                "$": {
                                  "ref": "rp"
                                }
                              },
                              {
                                "$": {
                                  "ref": "rt"
                                }
                              },
                              {
                                "$": {
                                  "ref": "rp"
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "s",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "samp",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "select"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "option",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "optgroup",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "autofocus",
                  "type": "autofocus_boolean"
                }
              },
              {
                "$": {
                  "name": "disabled",
                  "type": "disabled_boolean"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "multiple",
                  "type": "multiple_boolean"
                }
              },
              {
                "$": {
                  "name": "name"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "required",
                  "type": "required_boolean"
                }
              },
              {
                "$": {
                  "name": "size",
                  "type": "positive_int"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "small",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "span",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "strong",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "sub",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "sup",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "textarea"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:attribute": [
              {
                "$": {
                  "name": "autofocus",
                  "type": "autofocus_boolean"
                }
              },
              {
                "$": {
                  "name": "cols",
                  "type": "positive_int"
                }
              },
              {
                "$": {
                  "name": "dirname",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "disabled",
                  "type": "disabled_boolean"
                }
              },
              {
                "$": {
                  "name": "form",
                  "type": "xs:IDREF"
                }
              },
              {
                "$": {
                  "name": "maxlength",
                  "type": "positive_int"
                }
              },
              {
                "$": {
                  "name": "name"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:minLength": [
                          {
                            "$": {
                              "value": "1"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "placeholder",
                  "type": "xs:string"
                }
              },
              {
                "$": {
                  "name": "readonly",
                  "type": "readonly_boolean"
                }
              },
              {
                "$": {
                  "name": "required",
                  "type": "required_boolean"
                }
              },
              {
                "$": {
                  "name": "rows",
                  "type": "positive_int"
                }
              },
              {
                "$": {
                  "name": "wrap"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:token"
                        },
                        "xs:enumeration": [
                          {
                            "$": {
                              "value": "soft"
                            }
                          },
                          {
                            "$": {
                              "value": "hard"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "time"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "ref": "abbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "b"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdi"
                    }
                  },
                  {
                    "$": {
                      "ref": "bdo"
                    }
                  },
                  {
                    "$": {
                      "ref": "br"
                    }
                  },
                  {
                    "$": {
                      "ref": "button"
                    }
                  },
                  {
                    "$": {
                      "ref": "command"
                    }
                  },
                  {
                    "$": {
                      "ref": "cite"
                    }
                  },
                  {
                    "$": {
                      "ref": "code"
                    }
                  },
                  {
                    "$": {
                      "ref": "datalist"
                    }
                  },
                  {
                    "$": {
                      "ref": "del"
                    }
                  },
                  {
                    "$": {
                      "ref": "dfn"
                    }
                  },
                  {
                    "$": {
                      "ref": "em"
                    }
                  },
                  {
                    "$": {
                      "ref": "i"
                    }
                  },
                  {
                    "$": {
                      "ref": "img"
                    }
                  },
                  {
                    "$": {
                      "ref": "input"
                    }
                  },
                  {
                    "$": {
                      "ref": "ins"
                    }
                  },
                  {
                    "$": {
                      "ref": "label"
                    }
                  },
                  {
                    "$": {
                      "ref": "kbd"
                    }
                  },
                  {
                    "$": {
                      "ref": "keygen"
                    }
                  },
                  {
                    "$": {
                      "ref": "mark"
                    }
                  },
                  {
                    "$": {
                      "ref": "meter"
                    }
                  },
                  {
                    "$": {
                      "ref": "output"
                    }
                  },
                  {
                    "$": {
                      "ref": "progress"
                    }
                  },
                  {
                    "$": {
                      "ref": "q"
                    }
                  },
                  {
                    "$": {
                      "ref": "ruby"
                    }
                  },
                  {
                    "$": {
                      "ref": "s"
                    }
                  },
                  {
                    "$": {
                      "ref": "samp"
                    }
                  },
                  {
                    "$": {
                      "ref": "select"
                    }
                  },
                  {
                    "$": {
                      "ref": "small"
                    }
                  },
                  {
                    "$": {
                      "ref": "span"
                    }
                  },
                  {
                    "$": {
                      "ref": "strong"
                    }
                  },
                  {
                    "$": {
                      "ref": "sub"
                    }
                  },
                  {
                    "$": {
                      "ref": "sup"
                    }
                  },
                  {
                    "$": {
                      "ref": "textarea"
                    }
                  },
                  {
                    "$": {
                      "ref": "u"
                    }
                  },
                  {
                    "$": {
                      "ref": "var"
                    }
                  },
                  {
                    "$": {
                      "ref": "wbr"
                    }
                  },
                  {
                    "$": {
                      "ref": "mml:math"
                    }
                  },
                  {
                    "$": {
                      "ref": "svg:svg"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "pubdate"
                },
                "xs:simpleType": [
                  {
                    "xs:restriction": [
                      {
                        "$": {
                          "base": "xs:string"
                        },
                        "xs:pattern": [
                          {
                            "$": {
                              "value": "([Pp][Uu][Bb][Dd][Aa][Tt][Ee])?"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "$": {
                  "name": "datetime",
                  "type": "xs:string"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "u",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "var",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "wbr",
          "type": "empty_elem_global_attrs"
        }
      },
      {
        "$": {
          "name": "area"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "alt",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "coords"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:string"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "[0-9][0-9,]*"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "shape"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "circle"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "circ"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "default"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "poly"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "polygon"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "rect"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "rectangle"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "href",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "target",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "rel"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:string"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "(alternate|author|bookmark|external|help|icon|license|next|nofollow|noreferrer|pingback|prefetch|prev|search|sidebar|stylesheet|tag)( (alternate|author|bookmark|external|help|icon|license|next|nofollow|noreferrer|pingback|prefetch|prev|search|sidebar|stylesheet|tag))*"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "media",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "hreflang",
                          "type": "xs:language"
                        }
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "caption",
          "type": "caption"
        }
      },
      {
        "$": {
          "name": "col"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "span",
                          "type": "xs:int"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "colgroup"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "col",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "span",
                  "type": "xs:int"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "dd",
          "type": "block_xor_inline_children"
        }
      },
      {
        "$": {
          "name": "dt",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "figcaption",
          "type": "caption"
        }
      },
      {
        "$": {
          "name": "legend",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "li",
          "type": "block_xor_inline_children"
        }
      },
      {
        "$": {
          "name": "optgroup"
        },
        "xs:complexType": [
          {
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "option",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attribute": [
              {
                "$": {
                  "name": "disabled",
                  "type": "disabled_boolean"
                }
              },
              {
                "$": {
                  "name": "label",
                  "type": "xs:string",
                  "use": "required"
                }
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "option"
        },
        "xs:complexType": [
          {
            "$": {
              "mixed": "true"
            },
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "disabled",
                          "type": "disabled_boolean"
                        }
                      },
                      {
                        "$": {
                          "name": "label",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "selected"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "([Ss][Ee][Ll][Ee][Cc][Tt][Ee][Dd])?"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "value",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "param"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "name",
                          "type": "xs:string",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "value",
                          "type": "xs:string",
                          "use": "required"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "rp",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "rt",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "source"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "media",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "src",
                          "type": "xs:anyURI",
                          "use": "required"
                        }
                      },
                      {
                        "$": {
                          "name": "type",
                          "type": "xs:string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "summary",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "tbody",
          "type": "tablegrouping"
        }
      },
      {
        "$": {
          "name": "td"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "block_xor_inline_children"
                    },
                    "xs:attributeGroup": [
                      {
                        "$": {
                          "ref": "tablecellattributes"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "th"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "inlines_mml_and_svg"
                    },
                    "xs:attributeGroup": [
                      {
                        "$": {
                          "ref": "tablecellattributes"
                        }
                      }
                    ],
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "scope"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "auto"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "col"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "colgroup"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "row"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "rowgroup"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "thead",
          "type": "tablegrouping"
        }
      },
      {
        "$": {
          "name": "tfoot",
          "type": "tablegrouping"
        }
      },
      {
        "$": {
          "name": "tr"
        },
        "xs:complexType": [
          {
            "xs:choice": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "td",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  },
                  {
                    "$": {
                      "ref": "th",
                      "minOccurs": "0",
                      "maxOccurs": "unbounded"
                    }
                  }
                ]
              }
            ],
            "xs:attributeGroup": [
              {
                "$": {
                  "ref": "globals"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "track"
        },
        "xs:complexType": [
          {
            "xs:complexContent": [
              {
                "xs:extension": [
                  {
                    "$": {
                      "base": "empty_elem_global_attrs"
                    },
                    "xs:attribute": [
                      {
                        "$": {
                          "name": "default"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:pattern": [
                                  {
                                    "$": {
                                      "value": "([Dd][Ee][Ff][Aa][Uu][Ll][Tt])?"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "kind"
                        },
                        "xs:simpleType": [
                          {
                            "xs:restriction": [
                              {
                                "$": {
                                  "base": "xs:token"
                                },
                                "xs:enumeration": [
                                  {
                                    "$": {
                                      "value": "captions"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "chapters"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "descriptions"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "metadata"
                                    }
                                  },
                                  {
                                    "$": {
                                      "value": "subtitles"
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "$": {
                          "name": "label",
                          "type": "xs:string"
                        }
                      },
                      {
                        "$": {
                          "name": "src",
                          "type": "xs:anyURI"
                        }
                      },
                      {
                        "$": {
                          "name": "srclang",
                          "type": "xs:language"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "h1",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "h2",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "h3",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "h4",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "h5",
          "type": "inlines_mml_and_svg"
        }
      },
      {
        "$": {
          "name": "h6",
          "type": "inlines_mml_and_svg"
        }
      }
    ],
    "xs:complexType": [
      {
        "$": {
          "name": "coverfigure"
        },
        "xs:group": [
          {
            "$": {
              "ref": "figure_elements",
              "maxOccurs": "unbounded"
            }
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "fixed": "cover",
              "use": "required"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "bookmaindiv"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h1"
                }
              },
              {
                "$": {
                  "name": "h2",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "sect1"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "type": "bookmaindivtype"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "bookpart"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h1"
                }
              },
              {
                "$": {
                  "name": "h2",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "maxOccurs": "unbounded",
                  "type": "bookmaindiv"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "part"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sect1"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h1"
                }
              },
              {
                "$": {
                  "name": "h2",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "sect2"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "sect1"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sect2"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h2"
                }
              },
              {
                "$": {
                  "name": "h3",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "sect3"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "sect2"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sect3"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h3"
                }
              },
              {
                "$": {
                  "name": "h4",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "sect4"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "sect3"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sect4"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h4"
                }
              },
              {
                "$": {
                  "name": "h5",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              },
              {
                "$": {
                  "name": "section",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "sect5"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "sect4"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sect5"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h5"
                }
              },
              {
                "$": {
                  "name": "h6",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded",
                  "type": "subheading"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "fixed": "sect5"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "sidebar"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h5",
                  "minOccurs": "0"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "figure_elements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "subheading",
          "mixed": "true"
        },
        "xs:sequence": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "inlines_plus_mml_and_svg",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "data-type",
              "use": "required",
              "type": "subheadingtype"
            }
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "nav_doc_ol"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "name": "li",
                  "type": "nav_doc_li",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "ol_attrs"
            }
          },
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "nav_doc_li",
          "mixed": "true"
        },
        "xs:choice": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "span"
                }
              }
            ],
            "xs:sequence": [
              {
                "xs:element": [
                  {
                    "$": {
                      "ref": "a"
                    }
                  },
                  {
                    "$": {
                      "name": "ol",
                      "minOccurs": "0",
                      "type": "nav_doc_ol"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "inlines_mml_and_svg",
          "mixed": "true"
        },
        "xs:sequence": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "inlines_plus_mml_and_svg",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "block_xor_inline_children",
          "mixed": "true"
        },
        "xs:choice": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "blockelements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              },
              {
                "$": {
                  "ref": "inlineelements",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "any_elems_attrs",
          "mixed": "true"
        },
        "xs:sequence": [
          {
            "$": {
              "minOccurs": "0",
              "maxOccurs": "unbounded"
            },
            "xs:any": [
              {
                "$": {
                  "processContents": "lax"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "empty_elem_global_attrs"
        },
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "caption",
          "mixed": "true"
        },
        "xs:choice": [
          {
            "xs:choice": [
              {
                "$": {
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                },
                "xs:element": [
                  {
                    "$": {
                      "ref": "p"
                    }
                  },
                  {
                    "$": {
                      "ref": "div"
                    }
                  }
                ]
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "inlines_plus_mml_and_svg",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      },
      {
        "$": {
          "name": "tablegrouping"
        },
        "xs:sequence": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "tr",
                  "minOccurs": "0",
                  "maxOccurs": "unbounded"
                }
              }
            ]
          }
        ],
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals"
            }
          }
        ]
      }
    ],
    "xs:simpleType": [
      {
        "$": {
          "name": "bookmaindivtype"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:string"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "acknowledgments"
                }
              },
              {
                "$": {
                  "value": "afterword"
                }
              },
              {
                "$": {
                  "value": "appendix"
                }
              },
              {
                "$": {
                  "value": "bibliography"
                }
              },
              {
                "$": {
                  "value": "chapter"
                }
              },
              {
                "$": {
                  "value": "colophon"
                }
              },
              {
                "$": {
                  "value": "conclusion"
                }
              },
              {
                "$": {
                  "value": "copyright-page"
                }
              },
              {
                "$": {
                  "value": "dedication"
                }
              },
              {
                "$": {
                  "value": "foreword"
                }
              },
              {
                "$": {
                  "value": "glossary"
                }
              },
              {
                "$": {
                  "value": "halftitlepage"
                }
              },
              {
                "$": {
                  "value": "index"
                }
              },
              {
                "$": {
                  "value": "introduction"
                }
              },
              {
                "$": {
                  "value": "preface"
                }
              },
              {
                "$": {
                  "value": "titlepage"
                }
              },
              {
                "$": {
                  "value": "toc"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "nonemptystring"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:string"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": ".+"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "positive_int"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:integer"
            },
            "xs:minExclusive": [
              {
                "$": {
                  "value": "0"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "subheadingtype"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:string"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "subtitle"
                }
              },
              {
                "$": {
                  "value": "author"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "true_false"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "true"
                }
              },
              {
                "$": {
                  "value": "false"
                }
              },
              {
                "$": {
                  "value": ""
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "on_off"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "on"
                }
              },
              {
                "$": {
                  "value": "off"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "autofocus_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Aa][Uu][Tt][Oo][Ff][Oo][Cc][Uu][Ss])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "checked_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Cc][Hh][Ee][Cc][Kk][Ee][Dd])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "disabled_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Dd][Ii][Ss][Aa][Bb][Ll][Ee][Dd])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "formnovalidate_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Ff][Oo][Rr][Mm][Nn][Oo][Vv][Aa][Ll][Ii][Dd][Aa][Tt][Ee])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "multiple_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Mm][Uu][Ll][Tt][Ii][Pp][Ll][Ee])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "readonly_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Rr][Ee][Aa][Dd][Oo][Nn][Ll][Yy])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "required_boolean"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "([Rr][Ee][Qq][Uu][Ii][Rr][Ee][Dd])?"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "enctype_formenctype"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:string"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "application/x-www-form-urlencoded"
                }
              },
              {
                "$": {
                  "value": "multipart/form-data"
                }
              },
              {
                "$": {
                  "value": "text/plain"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "method_formmethod"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:token"
            },
            "xs:enumeration": [
              {
                "$": {
                  "value": "get"
                }
              },
              {
                "$": {
                  "value": "post"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "hash_name"
        },
        "xs:restriction": [
          {
            "$": {
              "base": "xs:string"
            },
            "xs:pattern": [
              {
                "$": {
                  "value": "#.+"
                }
              }
            ]
          }
        ]
      }
    ],
    "xs:group": [
      {
        "$": {
          "name": "blockelements"
        },
        "xs:choice": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "address"
                }
              },
              {
                "$": {
                  "ref": "aside"
                }
              },
              {
                "$": {
                  "ref": "audio"
                }
              },
              {
                "$": {
                  "ref": "blockquote"
                }
              },
              {
                "$": {
                  "ref": "canvas"
                }
              },
              {
                "$": {
                  "ref": "details"
                }
              },
              {
                "$": {
                  "ref": "div"
                }
              },
              {
                "$": {
                  "ref": "dl"
                }
              },
              {
                "$": {
                  "ref": "embed"
                }
              },
              {
                "$": {
                  "ref": "fieldset"
                }
              },
              {
                "$": {
                  "ref": "figure"
                }
              },
              {
                "$": {
                  "ref": "form"
                }
              },
              {
                "$": {
                  "ref": "hr"
                }
              },
              {
                "$": {
                  "ref": "iframe"
                }
              },
              {
                "$": {
                  "ref": "map"
                }
              },
              {
                "$": {
                  "ref": "menu"
                }
              },
              {
                "$": {
                  "ref": "object"
                }
              },
              {
                "$": {
                  "ref": "ol"
                }
              },
              {
                "$": {
                  "ref": "p"
                }
              },
              {
                "$": {
                  "ref": "pre"
                }
              },
              {
                "$": {
                  "ref": "table"
                }
              },
              {
                "$": {
                  "ref": "ul"
                }
              },
              {
                "$": {
                  "ref": "video"
                }
              }
            ],
            "xs:group": [
              {
                "$": {
                  "ref": "external_elements"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "external_elements"
        },
        "xs:choice": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "mml:math"
                }
              },
              {
                "$": {
                  "ref": "svg:svg"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "figure_elements"
        },
        "xs:choice": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "blockelements"
                }
              }
            ],
            "xs:element": [
              {
                "$": {
                  "ref": "img"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "map_elements"
        },
        "xs:choice": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "blockelements"
                }
              }
            ],
            "xs:element": [
              {
                "$": {
                  "ref": "area"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "headings"
        },
        "xs:choice": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "h1"
                }
              },
              {
                "$": {
                  "ref": "h2"
                }
              },
              {
                "$": {
                  "ref": "h3"
                }
              },
              {
                "$": {
                  "ref": "h4"
                }
              },
              {
                "$": {
                  "ref": "h5"
                }
              },
              {
                "$": {
                  "ref": "h6"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "inlineelements"
        },
        "xs:choice": [
          {
            "xs:element": [
              {
                "$": {
                  "ref": "a"
                }
              },
              {
                "$": {
                  "ref": "abbr"
                }
              },
              {
                "$": {
                  "ref": "b"
                }
              },
              {
                "$": {
                  "ref": "bdi"
                }
              },
              {
                "$": {
                  "ref": "bdo"
                }
              },
              {
                "$": {
                  "ref": "br"
                }
              },
              {
                "$": {
                  "ref": "button"
                }
              },
              {
                "$": {
                  "ref": "command"
                }
              },
              {
                "$": {
                  "ref": "cite"
                }
              },
              {
                "$": {
                  "ref": "code"
                }
              },
              {
                "$": {
                  "ref": "datalist"
                }
              },
              {
                "$": {
                  "ref": "del"
                }
              },
              {
                "$": {
                  "ref": "dfn"
                }
              },
              {
                "$": {
                  "ref": "em"
                }
              },
              {
                "$": {
                  "ref": "i"
                }
              },
              {
                "$": {
                  "ref": "input"
                }
              },
              {
                "$": {
                  "ref": "img"
                }
              },
              {
                "$": {
                  "ref": "ins"
                }
              },
              {
                "$": {
                  "ref": "kbd"
                }
              },
              {
                "$": {
                  "ref": "keygen"
                }
              },
              {
                "$": {
                  "ref": "label"
                }
              },
              {
                "$": {
                  "ref": "mark"
                }
              },
              {
                "$": {
                  "ref": "meter"
                }
              },
              {
                "$": {
                  "ref": "output"
                }
              },
              {
                "$": {
                  "ref": "progress"
                }
              },
              {
                "$": {
                  "ref": "q"
                }
              },
              {
                "$": {
                  "ref": "ruby"
                }
              },
              {
                "$": {
                  "ref": "s"
                }
              },
              {
                "$": {
                  "ref": "samp"
                }
              },
              {
                "$": {
                  "ref": "select"
                }
              },
              {
                "$": {
                  "ref": "small"
                }
              },
              {
                "$": {
                  "ref": "span"
                }
              },
              {
                "$": {
                  "ref": "strong"
                }
              },
              {
                "$": {
                  "ref": "sub"
                }
              },
              {
                "$": {
                  "ref": "sup"
                }
              },
              {
                "$": {
                  "ref": "textarea"
                }
              },
              {
                "$": {
                  "ref": "time"
                }
              },
              {
                "$": {
                  "ref": "u"
                }
              },
              {
                "$": {
                  "ref": "var"
                }
              },
              {
                "$": {
                  "ref": "wbr"
                }
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "inlines_plus_mml_and_svg"
        },
        "xs:choice": [
          {
            "xs:group": [
              {
                "$": {
                  "ref": "inlineelements"
                }
              },
              {
                "$": {
                  "ref": "external_elements"
                }
              }
            ]
          }
        ]
      }
    ],
    "xs:attributeGroup": [
      {
        "$": {
          "name": "globals_minus_dir"
        },
        "xs:attribute": [
          {
            "$": {
              "name": "accesskey"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:NMTOKENS"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "[^ ]( [^ ])*"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "class",
              "type": "xs:NMTOKENS"
            }
          },
          {
            "$": {
              "name": "contenteditable",
              "type": "true_false"
            }
          },
          {
            "$": {
              "name": "contextmenu",
              "type": "xs:IDREF"
            }
          },
          {
            "$": {
              "name": "draggable",
              "type": "true_false"
            }
          },
          {
            "$": {
              "name": "dropzone",
              "type": "xs:NMTOKENS"
            }
          },
          {
            "$": {
              "name": "hidden"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Hh][Ii][Dd][Dd][Ee][Nn])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "id",
              "type": "xs:ID"
            }
          },
          {
            "$": {
              "name": "lang",
              "type": "xs:language"
            }
          },
          {
            "$": {
              "name": "spellcheck",
              "type": "true_false"
            }
          },
          {
            "$": {
              "name": "style",
              "type": "xs:string"
            }
          },
          {
            "$": {
              "name": "tabindex",
              "type": "xs:integer"
            }
          },
          {
            "$": {
              "name": "title",
              "type": "xs:string"
            }
          }
        ],
        "xs:anyAttribute": [
          {
            "$": {
              "processContents": "lax"
            }
          }
        ]
      },
      {
        "$": {
          "name": "globals"
        },
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "globals_minus_dir"
            }
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "dir"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:enumeration": [
                      {
                        "$": {
                          "value": "ltr"
                        }
                      },
                      {
                        "$": {
                          "value": "rtl"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "ol_attrs"
        },
        "xs:attribute": [
          {
            "$": {
              "name": "reversed"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:string"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Rr][Ee][Vv][Ee][Rr][Ss][Ee][Dd])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "start",
              "type": "xs:integer"
            }
          },
          {
            "$": {
              "name": "type"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:enumeration": [
                      {
                        "$": {
                          "value": "1"
                        }
                      },
                      {
                        "$": {
                          "value": "a"
                        }
                      },
                      {
                        "$": {
                          "value": "A"
                        }
                      },
                      {
                        "$": {
                          "value": "i"
                        }
                      },
                      {
                        "$": {
                          "value": "I"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "generalmediaattributes"
        },
        "xs:attribute": [
          {
            "$": {
              "name": "src",
              "type": "xs:anyURI"
            }
          },
          {
            "$": {
              "name": "preload"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:enumeration": [
                      {
                        "$": {
                          "value": "auto"
                        }
                      },
                      {
                        "$": {
                          "value": "metadata"
                        }
                      },
                      {
                        "$": {
                          "value": "none"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "autoplay"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Aa][Uu][Tt][Oo][Pp][Ll][Aa][Yy])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "mediagroup",
              "type": "xs:string"
            }
          },
          {
            "$": {
              "name": "loop"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Ll][Oo][Oo][Pp])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "muted"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Mm][Uu][Tt][Ee][Dd])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "name": "controls"
            },
            "xs:simpleType": [
              {
                "xs:restriction": [
                  {
                    "$": {
                      "base": "xs:token"
                    },
                    "xs:pattern": [
                      {
                        "$": {
                          "value": "([Cc][Oo][Nn][Tt][Rr][Oo][Ll][Ss])?"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "$": {
          "name": "videomediaattributes"
        },
        "xs:attributeGroup": [
          {
            "$": {
              "ref": "generalmediaattributes"
            }
          }
        ],
        "xs:attribute": [
          {
            "$": {
              "name": "poster",
              "type": "xs:anyURI"
            }
          },
          {
            "$": {
              "name": "width",
              "type": "xs:string"
            }
          },
          {
            "$": {
              "name": "height",
              "type": "xs:string"
            }
          }
        ]
      },
      {
        "$": {
          "name": "tablecellattributes"
        },
        "xs:attribute": [
          {
            "$": {
              "name": "colspan",
              "type": "positive_int"
            }
          },
          {
            "$": {
              "name": "rowspan",
              "type": "positive_int"
            }
          },
          {
            "$": {
              "name": "headers",
              "type": "xs:NMTOKENS"
            }
          }
        ]
      }
    ]
  }
}