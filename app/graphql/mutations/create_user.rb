module Mutations
  class CreateUser < Mutations::BaseMutation
    argument :params, InputTypes::User, required: true

    field :user, ObjectTypes::User, null: false

    def resolve(params:)
      user = User.create(params.to_h)
      p params
      puts params
      { user: }
    end
  end
end
