module Mutations
  class CreateTask < Mutations::BaseMutation
    argument :params, InputTypes::Task, required: true

    field :task, ObjectTypes::Task, null: false

    def resolve(params:)
      task = Task.create(params.to_h)
      { task: } # {"task" :task}の省略形
    end
  end
end
