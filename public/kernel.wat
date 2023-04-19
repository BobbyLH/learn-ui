(module
  (type (;0;) (func (result i32)))
  (type (;1;) (func))
  (type (;2;) (func (param i32 i32 i32)))
  (type (;3;) (func (param i32)))
  (type (;4;) (func (param i32) (result i32)))
  (func (;0;) (type 1)
    nop)
  (func (;1;) (type 0) (result i32)
    i32.const 1024)
  (func (;2;) (type 0) (result i32)
    i32.const 1040)
  (func (;3;) (type 2) (param i32 i32 i32)
    (local i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32)
    block  ;; label = @1
      local.get 1
      i32.const 3
      i32.lt_s
      br_if 0 (;@1;)
      local.get 0
      i32.const 3
      i32.lt_s
      br_if 0 (;@1;)
      local.get 1
      i32.const 2
      i32.sub
      local.set 22
      local.get 0
      i32.const 2
      i32.sub
      local.set 23
      i32.const 1032
      i32.load8_s
      local.set 9
      i32.const 1031
      i32.load8_s
      local.set 10
      i32.const 1029
      i32.load8_s
      local.set 11
      i32.const 1028
      i32.load8_s
      local.set 12
      i32.const 1030
      i32.load8_s
      local.set 13
      i32.const 1027
      i32.load8_s
      local.set 14
      i32.const 1026
      i32.load8_s
      local.set 15
      i32.const 1025
      i32.load8_s
      local.set 16
      i32.const 1024
      i32.load8_s
      local.set 17
      i32.const 1
      local.set 4
      loop  ;; label = @2
        local.get 0
        local.get 4
        i32.mul
        local.set 18
        local.get 4
        i32.const 1
        i32.add
        local.tee 24
        local.get 0
        i32.mul
        local.set 19
        local.get 4
        i32.const 1
        i32.sub
        local.get 0
        i32.mul
        local.set 20
        i32.const 1
        local.set 1
        loop  ;; label = @3
          local.get 1
          i32.const 1
          i32.sub
          local.tee 3
          local.get 19
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 5
          i32.load8_u offset=10
          local.set 25
          local.get 1
          local.get 19
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 21
          i32.load8_u offset=2
          local.set 26
          local.get 5
          i32.load8_u offset=2
          local.set 27
          local.get 3
          local.get 18
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 6
          i32.load8_u offset=10
          local.set 28
          local.get 1
          local.get 18
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 7
          i32.const 2
          i32.add
          i32.load8_u
          local.set 29
          local.get 6
          i32.load8_u offset=2
          local.set 30
          local.get 3
          local.get 20
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 8
          i32.load8_u offset=10
          local.set 31
          local.get 8
          i32.load8_u offset=2
          local.set 32
          local.get 1
          local.get 20
          i32.add
          i32.const 2
          i32.shl
          i32.const 1040
          i32.add
          local.tee 3
          i32.load8_u offset=2
          local.set 33
          local.get 5
          i32.load8_u offset=9
          local.set 34
          local.get 21
          i32.load8_u offset=1
          local.set 35
          local.get 5
          i32.load8_u offset=1
          local.set 36
          local.get 6
          i32.load8_u offset=9
          local.set 37
          local.get 7
          i32.load8_u offset=1
          local.set 38
          local.get 6
          i32.load8_u offset=1
          local.set 39
          local.get 8
          i32.load8_u offset=9
          local.set 40
          local.get 8
          i32.load8_u offset=1
          local.set 41
          local.get 3
          i32.load8_u offset=1
          local.set 42
          local.get 7
          i32.const 255
          local.get 16
          local.get 3
          i32.load8_u
          i32.mul
          local.get 17
          local.get 8
          i32.load8_u
          i32.mul
          i32.add
          local.get 15
          local.get 8
          i32.load8_u offset=8
          i32.mul
          i32.add
          local.get 14
          local.get 6
          i32.load8_u
          i32.mul
          i32.add
          local.get 12
          local.get 7
          i32.load8_u
          i32.mul
          i32.add
          local.get 11
          local.get 6
          i32.load8_u offset=8
          i32.mul
          i32.add
          local.get 13
          local.get 5
          i32.load8_u
          i32.mul
          i32.add
          local.get 10
          local.get 21
          i32.load8_u
          i32.mul
          i32.add
          local.get 9
          local.get 5
          i32.load8_u offset=8
          i32.mul
          i32.add
          local.get 2
          i32.div_s
          local.tee 3
          i32.const 0
          local.get 3
          i32.const 0
          i32.gt_s
          select
          local.tee 3
          local.get 3
          i32.const 255
          i32.ge_s
          select
          i32.store8
          local.get 7
          i32.const 255
          local.get 16
          local.get 42
          i32.mul
          local.get 17
          local.get 41
          i32.mul
          i32.add
          local.get 15
          local.get 40
          i32.mul
          i32.add
          local.get 14
          local.get 39
          i32.mul
          i32.add
          local.get 12
          local.get 38
          i32.mul
          i32.add
          local.get 11
          local.get 37
          i32.mul
          i32.add
          local.get 13
          local.get 36
          i32.mul
          i32.add
          local.get 10
          local.get 35
          i32.mul
          i32.add
          local.get 9
          local.get 34
          i32.mul
          i32.add
          local.get 2
          i32.div_s
          local.tee 3
          i32.const 0
          local.get 3
          i32.const 0
          i32.gt_s
          select
          local.tee 3
          local.get 3
          i32.const 255
          i32.ge_s
          select
          i32.store8 offset=1
          local.get 7
          i32.const 255
          local.get 16
          local.get 33
          i32.mul
          local.get 17
          local.get 32
          i32.mul
          i32.add
          local.get 15
          local.get 31
          i32.mul
          i32.add
          local.get 14
          local.get 30
          i32.mul
          i32.add
          local.get 12
          local.get 29
          i32.mul
          i32.add
          local.get 11
          local.get 28
          i32.mul
          i32.add
          local.get 13
          local.get 27
          i32.mul
          i32.add
          local.get 10
          local.get 26
          i32.mul
          i32.add
          local.get 9
          local.get 25
          i32.mul
          i32.add
          local.get 2
          i32.div_s
          local.tee 3
          i32.const 0
          local.get 3
          i32.const 0
          i32.gt_s
          select
          local.tee 3
          local.get 3
          i32.const 255
          i32.ge_s
          select
          i32.store8 offset=2
          local.get 1
          local.get 23
          i32.ne
          local.set 3
          local.get 1
          i32.const 1
          i32.add
          local.set 1
          local.get 3
          br_if 0 (;@3;)
        end
        local.get 4
        local.get 22
        i32.ne
        local.set 1
        local.get 24
        local.set 4
        local.get 1
        br_if 0 (;@2;)
      end
    end)
  (func (;4;) (type 0) (result i32)
    i32.const 3687440)
  (func (;5;) (type 0) (result i32)
    global.get 0)
  (func (;6;) (type 3) (param i32)
    local.get 0
    global.set 0)
  (func (;7;) (type 4) (param i32) (result i32)
    global.get 0
    local.get 0
    i32.sub
    i32.const -16
    i32.and
    local.tee 0
    global.set 0
    local.get 0)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 256 256)
  (global (;0;) (mut i32) (i32.const 3752992))
  (export "memory" (memory 0))
  (export "cppGetkernelPtr" (func 1))
  (export "cppGetDataPtr" (func 2))
  (export "cppConvFilter" (func 3))
  (export "__indirect_function_table" (table 0))
  (export "_initialize" (func 0))
  (export "__errno_location" (func 4))
  (export "stackSave" (func 5))
  (export "stackRestore" (func 6))
  (export "stackAlloc" (func 7))
  (elem (;0;) (i32.const 1) func 0))
