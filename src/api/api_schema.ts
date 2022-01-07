const bookingSchema = {
  description: 'Book session',
  body: {
    type: 'object',
    properties: {
      coachId: {
        type: 'string',
      },
      clientId: {
        type: 'string',
      },
      time: {
        type: 'string',
      },
      length: {
        type: 'number',
      }
    },
    required: ['coachId', 'clientId', 'time', 'length'],
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const createCoachSchema = {
  description: 'Create Coach',
  body: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      }
    },
    required: ['firstName', 'lastName'],
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const replySchema = {
  description: 'Reply to unapproved sessions',
  body: {
    type: 'object',
    properties: {
      sessionId: {
        type: 'string',
      },
      approved: {
        type: 'boolean',
      }
    },
    required: ['sessionId', 'approved'],
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const paymentSchema = {
  description: 'Payment API',
  body: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
      },
      creditCard: {
        type: 'number',
      },
      cvv: {
        type: 'number',
      },
      sessionId: {
        type: 'string',
      }
    },
    required: ['clientId', 'sessionId', 'cvv', 'creditCard'],
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const createClientSchema = {
  description: 'Create Client',
  body: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
      },
      lastName: {
        type: 'string',
      }
    },
    required: ['firstName', 'lastName'],
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const takenSessions = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    '200': {
      timeFrom: { type: 'string', format: 'date-time' },
      timeTo: { type: 'string', format: 'date-time' }
    }
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const sessions = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    '200': {
      coachId: { type: 'string' },
      clientId: { type: 'string' },
      _id: { type: 'string' },
      length: { type: 'number' },
      timeFrom: { type: 'string', format: 'date-time' },
      timeTo: { type: 'string', format: 'date-time' },
      paid: { type: 'boolean' }
    }
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const pendingSessions = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    '200': {
      coachId: { type: 'string' },
      clientId: { type: 'string' },
      _id: { type: 'string' },
      length: { type: 'number' },
      timeFrom: { type: 'string', format: 'date-time' },
      timeTo: { type: 'string', format: 'date-time' },
      paid: { type: 'boolean' }
    }
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const getAllCoaches = {
  response: {
    '200': {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      _id: { type: 'string' }
    }
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

const getAllClients = {
  response: {
    '200': {
      firstName: { type: 'string' },
      lastName: { type: 'string' },
      _id: { type: 'string' }
    }
  },
  headers: {
    type: 'object',
    properties: {
      authorization: {
        type: 'string',
      }
    },
    required: ['authorization'],
  }
}

export {
    paymentSchema,
    bookingSchema,
    replySchema,
    createCoachSchema,
    createClientSchema,
    takenSessions,
    sessions,
    pendingSessions,
    getAllCoaches,
    getAllClients,
}